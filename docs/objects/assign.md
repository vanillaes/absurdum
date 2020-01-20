# objects.assign

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="assignobject-sources"><code>assign(object, sources)</code></h3>

Assign merges object properties from all supplied objects. If a property
already exists, then it is overwritten when merged from left to right.

#### Arguments
1. `object` *(object)*: input object
2. `sources` *(...object): input source object(s)*

#### Returns
*(object)*: returns new object

#### Example
```js
const someObj = { hold: 44, fast: 14 };
const result = objects.assign(someObj, { hold: 25, your: 19, horses: 4 });
console.log(result);
> { hold: 25, fast: 14, your: 19, horses: 4 }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
