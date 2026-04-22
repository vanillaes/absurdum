# arrays.without

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="acc"><code>acc</code></h3>



---

<!-- /div -->

<!-- /div -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionwithoutarrayarray-values"><code>export function without *(array(array, values)*</code></h3>

Without, returns an array with all values parameters removed from the input array

#### Arguments
1. `array` *(T&#91;&#93;)*: input array
2. `values` *(...&#42;)*: input values

#### Returns
*(&#42;)*: an array of unique values

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
