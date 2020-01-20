# objects.defaultsDeep

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="defaultsdeepobject-sources"><code>defaultsDeep(object, sources)</code></h3>

DefaultsDeep recursively merges object properties from all supplied objects with object values
being merged recursively and once a property is set, additional values of the same property are ignored.

#### Arguments
1. `object` *(object)*: input object
2. `sources` *(...object): input source object(s)*

#### Returns
*(object)*: returns an object with all included object properties merged

#### Example
```js
const result = objects.defaultsDeep({ a: { b: [3, 4] } }, { a: { b: [9, 18, 15], c: 3 } });
console.log(result);
> { a: { b: [ 3, 4, 15 ], c: 3 } }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
