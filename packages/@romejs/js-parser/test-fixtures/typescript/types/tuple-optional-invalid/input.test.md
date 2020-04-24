# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > types > tuple-optional-invalid`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.ts'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array ['ts']
  loc: Object {
    filename: 'input.ts'
    end: Object {
      column: 0
      index: 25
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'A required element cannot follow an optional element.'}
      }
      location: Object {
        filename: 'input.ts'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 23
          index: 23
          line: 1
        }
        start: Object {
          column: 17
          index: 17
          line: 1
        }
      }
    }
  ]
  body: Array [
    VariableDeclarationStatement {
      loc: Object {
        filename: 'input.ts'
        end: Object {
          column: 24
          index: 24
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      declaration: VariableDeclaration {
        kind: 'let'
        loc: Object {
          filename: 'input.ts'
          end: Object {
            column: 24
            index: 24
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        declarations: Array [
          VariableDeclarator {
            id: BindingIdentifier {
              name: 'x'
              loc: Object {
                filename: 'input.ts'
                end: Object {
                  column: 24
                  index: 24
                  line: 1
                }
                start: Object {
                  column: 4
                  index: 4
                  line: 1
                }
              }
              meta: PatternMeta {
                definite: undefined
                loc: Object {
                  filename: 'input.ts'
                  end: Object {
                    column: 24
                    index: 24
                    line: 1
                  }
                  start: Object {
                    column: 4
                    index: 4
                    line: 1
                  }
                }
                typeAnnotation: TSTupleType {
                  rest: undefined
                  loc: Object {
                    filename: 'input.ts'
                    end: Object {
                      column: 24
                      index: 24
                      line: 1
                    }
                    start: Object {
                      column: 7
                      index: 7
                      line: 1
                    }
                  }
                  elementTypes: Array [
                    TSOptionalType {
                      loc: Object {
                        filename: 'input.ts'
                        end: Object {
                          column: 15
                          index: 15
                          line: 1
                        }
                        start: Object {
                          column: 8
                          index: 8
                          line: 1
                        }
                      }
                      typeAnnotation: StringKeywordTypeAnnotation {
                        loc: Object {
                          filename: 'input.ts'
                          end: Object {
                            column: 14
                            index: 14
                            line: 1
                          }
                          start: Object {
                            column: 8
                            index: 8
                            line: 1
                          }
                        }
                      }
                    }
                    NumberKeywordTypeAnnotation {
                      loc: Object {
                        filename: 'input.ts'
                        end: Object {
                          column: 23
                          index: 23
                          line: 1
                        }
                        start: Object {
                          column: 17
                          index: 17
                          line: 1
                        }
                      }
                    }
                  ]
                }
              }
            }
            init: undefined
            loc: Object {
              filename: 'input.ts'
              end: Object {
                column: 24
                index: 24
                line: 1
              }
              start: Object {
                column: 4
                index: 4
                line: 1
              }
            }
          }
        ]
      }
    }
  ]
}
```