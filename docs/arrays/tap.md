# arrays.tap

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="taparray-func"><code>tap(array, func)</code></h3>

Applies a function to each element in the array without mutating it

#### Arguments
1. `array` *(Array)*: input array
2. `func` *(Function)*: function to apply

#### Returns
*(Array)*: input array unchanged

#### Example
```js
const result = arrays.tap([1, 2, 3, 4], console.log);
> 1
> 2
> 3
> 4
console.log(result);
> [1, 2, 3, 4]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
