# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > regression > 5`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "jsx/regression/5/input.jsx"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array ["jsx"]
	loc: Object {
		filename: "jsx/regression/5/input.jsx"
		end: Object {
			column: 17
			line: 1
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "jsx/regression/5/input.jsx"
				end: Object {
					column: 17
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSXElement {
				name: JSXIdentifier {
					name: "div"
					loc: Object {
						filename: "jsx/regression/5/input.jsx"
						end: Object {
							column: 4
							line: 1
						}
						start: Object {
							column: 1
							line: 1
						}
					}
				}
				attributes: Array []
				selfClosing: false
				typeArguments: undefined
				loc: Object {
					filename: "jsx/regression/5/input.jsx"
					end: Object {
						column: 17
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				children: Array [
					JSXExpressionContainer {
						loc: Object {
							filename: "jsx/regression/5/input.jsx"
							end: Object {
								column: 8
								line: 1
							}
							start: Object {
								column: 5
								line: 1
							}
						}
						expression: JSReferenceIdentifier {
							name: "a"
							loc: Object {
								filename: "jsx/regression/5/input.jsx"
								identifierName: "a"
								end: Object {
									column: 7
									line: 1
								}
								start: Object {
									column: 6
									line: 1
								}
							}
						}
					}
					JSXExpressionContainer {
						loc: Object {
							filename: "jsx/regression/5/input.jsx"
							end: Object {
								column: 11
								line: 1
							}
							start: Object {
								column: 8
								line: 1
							}
						}
						expression: JSReferenceIdentifier {
							name: "b"
							loc: Object {
								filename: "jsx/regression/5/input.jsx"
								identifierName: "b"
								end: Object {
									column: 10
									line: 1
								}
								start: Object {
									column: 9
									line: 1
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
