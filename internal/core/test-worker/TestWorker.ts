/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	TestWorkerPrepareTestOptions,
	TestWorkerPrepareTestResult,
	TestWorkerRunTestOptions,
} from "../common/bridges/TestWorkerBridge";
import {deriveDiagnosticFromError} from "@internal/diagnostics";
import {TestWorkerBridge} from "@internal/core";
import {createBridgeFromWorkerThreadParentPort} from "@internal/events";
import TestWorkerRunner, {TestWorkerFileResult} from "./TestWorkerRunner";
import inspector = require("inspector");
import setupGlobalErrorHandlers from "@internal/core/common/utils/setupGlobalErrorHandlers";

export type TestWorkerFlags = {
	inspectorPort: number;
};

export default class TestWorker {
	constructor() {
		this.bridge = this.buildBridge();
		this.runners = new Map();
	}

	private runners: Map<number, TestWorkerRunner>;
	private bridge: TestWorkerBridge;

	public async init(flags: TestWorkerFlags) {
		inspector.open(flags.inspectorPort);

		await this.bridge.handshake();
	}

	private buildBridge(): TestWorkerBridge {
		const bridge = createBridgeFromWorkerThreadParentPort(
			TestWorkerBridge,
			{
				type: "server",
			},
		);

		setupGlobalErrorHandlers((err) => {
			bridge.testDiagnostic.send({
				origin: undefined,
				diagnostic: deriveDiagnosticFromError(
					err,
					{
						description: {
							category: "tests/unhandledRejection",
						},
					},
				),
			});
		});

		bridge.inspectorDetails.subscribe(() => {
			return {
				inspectorUrl: inspector.url(),
			};
		});

		bridge.prepareTest.subscribe((data) => {
			return this.prepareTest(data);
		});

		bridge.runTest.subscribe((opts) => {
			return this.runTest(opts);
		});

		return bridge;
	}

	private async runTest(
		opts: TestWorkerRunTestOptions,
	): Promise<TestWorkerFileResult> {
		const {id} = opts;
		const runner = this.runners.get(id);
		if (runner === undefined) {
			throw new Error(`No runner ${id} found`);
		} else {
			return await runner.run(opts);
		}
	}

	private async prepareTest(
		opts: TestWorkerPrepareTestOptions,
	): Promise<TestWorkerPrepareTestResult> {
		const runner = new TestWorkerRunner(opts, this.bridge);
		this.runners.set(opts.id, runner);
		return await runner.prepare();
	}
}
