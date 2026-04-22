# arrays.filter

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="acc"><code>acc</code></h3>



---

<!-- /div -->

<!-- /div -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionfilterarrayarray-predicate"><code>export function filter *(array(array, predicate)*</code></h3>

Iterates over an array of values and only outputs values where `predicate is equal to true`.

#### Arguments
1. `array` *(T&#91;&#93;)*: input array
2. `predicate` *(Function)*: predicate function

#### Returns
*(&#42;)*: the input array w/ unwanted values removed

#### Example
```js
const result = arrays.filter([1, 2, 3, 4], (x) => x % 2 === 0);
console.log(result)
> [ 2, 4 ]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
