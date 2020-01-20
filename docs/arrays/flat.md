# arrays.flat

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="flatarray-depth1"><code>flat(array, [depth=1])</code></h3>

Flat flattens an array of nested arrays

#### Arguments
1. `array` *(Array)*: input array
2. `[depth=1]` *(number)*: depth of array elements to flat

#### Returns
*(Array)*: the flattened array

#### Example
```js
const result = arrays.flat([1, [2, [3, [4]]]]);
console.log(result);
> [1, 2, [3, [4]]]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
