# objects.merge

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="mergeobject-sources"><code>merge(object, sources)</code></h3>

Merge recursively merges object properties from all supplied objects with object values
being merged recursively and other value types overridden when applied from left to right.

#### Arguments
1. `object` *(object)*: input object
2. `sources` *(...object)*: input object/s

#### Returns
*(object)*: returns an object with all included object properties merged

#### Example
```js
const result = objects.merge({ a: [{ b: [2, 3, 14] }, { d: 4 }] }, { a: [{ b: [5, 7] }, { e: 5 }] });
console.log(result);
> { a: [{ b: [5, 7, 14] }, { d: 4, e: 5 }] }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
