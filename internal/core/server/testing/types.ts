/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Diagnostics} from "@internal/diagnostics";
import {SourceMapGenerator} from "@internal/codec-source-map";
import {ServerRequest, TestWorkerBridge} from "@internal/core";
import {CoverageFile, InspectorClient} from "@internal/v8";
import workerThreads = require("worker_threads");
import {FileReference} from "@internal/core/common/types/files";
import {DiagnosticsPrinterFlags} from "@internal/cli-diagnostics";

export type TestSource = {
	code: string;
	sourceMap: SourceMapGenerator;
	ref: FileReference;
};

export type TestSources = Map<string, TestSource>;

export type TestServerRunnerConstructorOptions = {
	sources: TestSources;
	request: ServerRequest;
	addDiagnostics: Diagnostics;
	options: TestServerRunnerOptions;
};

export type TestServerRunnerOptions = {
	filter: undefined | string;
	focusAllowed: boolean;
	coverage: boolean;
	showAllCoverage: boolean;
	updateSnapshots: boolean;
	freezeSnapshots: boolean;
	verboseDiagnostics: DiagnosticsPrinterFlags["verboseDiagnostics"];
	syncTests: boolean;
	sourceMaps: boolean;
};

export type CoverageDirectory = {
	name: undefined | string;
	directories: Map<string, CoverageDirectory>;
	files: Map<string, CoverageFile>;
};

export type TestWorkerContainer = {
	bridge: TestWorkerBridge;
	thread: workerThreads.Worker;
	inspector: undefined | InspectorClient;
};

export type TestWorkerContainers = Array<TestWorkerContainer>;
