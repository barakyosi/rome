# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-left-hand-side > migrated_0013`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/expression-left-hand-side/migrated_0013/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/expression-left-hand-side/migrated_0013/input.js"
		end: Object {
			column: 0
			line: 2
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/expression-left-hand-side/migrated_0013/input.js"
				end: Object {
					column: 38
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSMemberExpression {
				loc: Object {
					filename: "esprima/expression-left-hand-side/migrated_0013/input.js"
					end: Object {
						column: 38
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				object: JSReferenceIdentifier {
					name: "universe"
					loc: Object {
						filename: "esprima/expression-left-hand-side/migrated_0013/input.js"
						identifierName: "universe"
						end: Object {
							column: 8
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
				}
				property: JSComputedMemberProperty {
					value: JSSequenceExpression {
						loc: Object {
							filename: "esprima/expression-left-hand-side/migrated_0013/input.js"
							end: Object {
								column: 37
								line: 1
							}
							start: Object {
								column: 9
								line: 1
							}
						}
						expressions: Array [
							JSReferenceIdentifier {
								name: "galaxyName"
								loc: Object {
									filename: "esprima/expression-left-hand-side/migrated_0013/input.js"
									identifierName: "galaxyName"
									end: Object {
										column: 19
										line: 1
									}
									start: Object {
										column: 9
										line: 1
									}
								}
							}
							JSReferenceIdentifier {
								name: "otherUselessName"
								loc: Object {
									filename: "esprima/expression-left-hand-side/migrated_0013/input.js"
									identifierName: "otherUselessName"
									end: Object {
										column: 37
										line: 1
									}
									start: Object {
										column: 21
										line: 1
									}
								}
							}
						]
					}
					loc: Object {
						filename: "esprima/expression-left-hand-side/migrated_0013/input.js"
						end: Object {
							column: 38
							line: 1
						}
						start: Object {
							column: 8
							line: 1
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
