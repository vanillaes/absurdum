# arrays.flatten

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="flattenarray-isshallowfalse"><code>flatten(array, [isShallow=false])</code></h3>

Flattens an array of nested arrays

#### Arguments
1. `array` *(Array)*: input array
2. `[isShallow=false]` *(boolean)*: flag restricting flattening to one iteration

#### Returns
*(Array)*: the flattened array

#### Example
```js
const result = arrays.flatten([1, [2, [3, [4]]]]);
console.log(result);
> [1, 2, 3, 4]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
