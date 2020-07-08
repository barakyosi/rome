# `voidDomElementsNoChildren.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/compiler/lint/rules/react/voidDomElementsNoChildren.test.ts --update-snapshots` to update.

## `react void dom elements no children`

### `0`

```

 unknown:1 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ br is a void element tag and must not have children.

    <br className={'dont-remove-class'}>invalid children</br>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - <br className={'dont-remove-class'}>invalid children</br>
  + <br className={"dont-remove-class"} />

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
<br className={"dont-remove-class"} />;

```

### `1`

```

 unknown:1 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ img is a void element tag and must not have children.

    <img>invalid children</img>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - <img>invalid children</img>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
<img />;

```

### `2`

```

 unknown:1 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ hr is a void element tag and must not have children.

    <hr children={'invalid children'} />
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - <hr children={'invalid children'} />

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
<hr />;

```

### `3`

```

 unknown:1 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ area is a void element tag and must not have dangerouslySetInnerHTML.

    <area dangerouslySetInnerHTML={{__html: ''}}></area>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - <area dangerouslySetInnerHTML={{__html: ''}}></area>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
<area />;

```

### `4`

```

 unknown:1 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ img is a void element tag and must not have children, or dangerouslySetInnerHTML.

    <img dangerouslySetInnerHTML={{__html: ''}} children={'invalid children'}>invalid children</img>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - <img dangerouslySetInnerHTML={{__html: ''}} children={'invalid children'}>invalid children</img>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```
<img />;

```

### `5`

```

 unknown:1:28 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ img is a void element tag and must not have children.

    React.createElement("img", {children: "child"})
                                ^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - children: "child"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `5: formatted`

```
;

```

### `6`

```

 unknown:1:28 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ img is a void element tag and must not have dangerouslySetInnerHTML.

    React.createElement("img", {dangerouslySetInnerHTML: {__html: "child"}})
                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - dangerouslySetInnerHTML: {__html: "child"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `6: formatted`

```
;

```

### `7`

```

 unknown:1:20 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ img is a void element tag and must not have children.

    React.createElement("img", {}, "child")
                        ^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - "img", {}, "child"
  + React.createElement("img", {})

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `7: formatted`

```
React.createElement("img", {});

```

### `8`

```

 unknown:1:22 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ img is a void element tag and must not have children.

    createElement("img", {children: "child"})
                          ^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - children: "child"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `8: formatted`

```
;

```

### `9`

```

 unknown:1:22 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ img is a void element tag and must not have dangerouslySetInnerHTML.

    createElement("img", {dangerouslySetInnerHTML: {__html: "child"}})
                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - dangerouslySetInnerHTML: {__html: "child"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `9: formatted`

```
;

```

### `10`

```

 unknown:1:14 lint/react/voidDomElementsNoChildren  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ img is a void element tag and must not have children.

    createElement("img", {}, "child")
                  ^^^^^^^^^^^^^^^^^^

  ℹ Recommended fix

  - "img", {}, "child"
  + createElement("img", {})

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `10: formatted`

```
createElement("img", {});

```

### `11`

```
✔ No known problems!

```

### `11: formatted`

```
<div>Children</div>;

```

### `12`

```
✔ No known problems!

```

### `12: formatted`

```
<div children="Children" />;

```

### `13`

```
✔ No known problems!

```

### `13: formatted`

```
<div dangerouslySetInnerHTML={{__html: ""}} />;

```

### `14`

```
✔ No known problems!

```

### `14: formatted`

```
<br className="valid" />;

```

### `15`

```
✔ No known problems!

```

### `15: formatted`

```
React.createElement("img", {});

```

### `16`

```
✔ No known problems!

```

### `16: formatted`

```
React.createElement("div", {dangerouslySetInnerHTML: {__html: "child"}});

```

### `17`

```
✔ No known problems!

```

### `17: formatted`

```
React.createElement("div", {}, "child");

```

### `18`

```
✔ No known problems!

```

### `18: formatted`

```
createElement("img", {});

```

### `19`

```
✔ No known problems!

```

### `19: formatted`

```
createElement("div", {dangerouslySetInnerHTML: {__html: "child"}});

```

### `20`

```
✔ No known problems!

```

### `20: formatted`

```
createElement("div", {}, "child");

```