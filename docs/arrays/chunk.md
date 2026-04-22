# arrays.chunk

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="acc"><code>acc</code></h3>



---

<!-- /div -->

<!-- /div -->

<!-- div -->


<!-- div -->

<h3 id="chunk"><code>chunk</code></h3>



---

<!-- /div -->

<!-- /div -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionchunkarrayarray-size"><code>export function chunk *(array(array, [size])*</code></h3>

Splits the input array up into an subset arrays of equal size

#### Arguments
1. `array` *(T&#91;&#93;)*: input array
2. `[size]` *(number): size of each chunk &#42;(default `1`)*&#42;

#### Returns
*(&#42;)*: array of chunk arrays

#### Example
```js
const result = arrays.chunk([1, 2, 3, 4, 5], 2);
console.log(result);
> [[1, 2], [3, 4], [5]]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
