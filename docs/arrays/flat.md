# arrays.flat

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="acc"><code>acc</code></h3>



---

<!-- /div -->

<!-- /div -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionflatarrayarray-depth"><code>export function flat *(array(array, [depth])*</code></h3>

Flat flattens an array of nested arrays

#### Arguments
1. `array` *(T&#91;&#93;)*: input array
2. `[depth]` *(number): depth of array elements to flat &#42;(default `1`)*&#42;

#### Returns
*(&#42;)*: the flattened array

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
