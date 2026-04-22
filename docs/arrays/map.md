# arrays.map

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="acc"><code>acc</code></h3>



---

<!-- /div -->

<!-- /div -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionmaparrayarray-func"><code>export function map *(array(array, func)*</code></h3>

Map iterates over an array of values and applies a function to each value

#### Arguments
1. `array` *(T&#91;&#93;)*: input array
2. `func` *(Function)*: function describing how to map values

#### Returns
*(&#42;)*: array of mutated values

#### Example
```js
const result = arrays.map([1, 2, 3, 4], (x) => x + 2);
console.log(result)
> [ 3, 4, 5, 6 ]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
