# objects.defaults

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="defaultsobject-sources"><code>defaults(object, sources)</code></h3>

Defaults recursively merges object properties from all supplied objects. If a property
already exists, then the existing one is kept when merged from left to right.

#### Arguments
1. `object` *(object)*: input object
2. `sources` *(...object): input source object(s)*

#### Returns
*(object)*: returns new object

#### Example
```js
const someObj = { hold: 44 };
const result = objects.defaults(someObj, { hold: 25, your: 19, horses: 4 });
console.log(result);
> { hold: 44, your: 19, horses: 4 }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
