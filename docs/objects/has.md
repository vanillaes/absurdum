# objects.has

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="hasobject-path"><code>has(object, path)</code></h3>

Has, creates an array of values corresponding to paths of the object

#### Arguments
1. `object` *(object)*: input object
2. `path` *(Array|string)*: strings describing paths to be returned from an object

#### Returns
*(boolean)*: boolean true is a direct property of the object

#### Example
```js
const result = objects.has({ front: [1, 3, 5], back: [37, 39] });
console.log(result, 'back[1]');
> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
