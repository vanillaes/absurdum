# arrays.without

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="withoutarray-values"><code>without(array, values)</code></h3>

Without, returns an array with all values parameters removed from the input array

#### Arguments
1. `array` *(Array)*: input array
2. `values` *(...&#42;)*: input values

#### Returns
*(Array)*: an array of unique values

#### Example
```js
const result = arrays.without(['a', 'b', 'c', ['d']], 'b', ['d']);
console.log(result);
> ['a', 'c', ['d']]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
