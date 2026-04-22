# arrays.pull

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="acc"><code>acc</code></h3>



---

<!-- /div -->

<!-- /div -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionpullarrayarray-values"><code>export function pull *(array(array, values)*</code></h3>

Pull removes all of the given values from an array

#### Arguments
1. `array` *(T&#91;&#93;)*: input array
2. `values` *(...&#42;)*: values to be removed from the array

#### Returns
*(&#42;)*: array of with values removed

#### Example
```js
const result = arrays.pull([1, 2, 3, 4], 2, 4);
console.log(result)
> [1, 3]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
