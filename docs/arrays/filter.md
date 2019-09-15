# arrays.filter

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="filterarray-predicate"><code>filter(array, predicate)</code></h3>

Filter iterates over an array of values and only outputs values where `predicate = true`.

#### Arguments
1. `array` *(Array)*:
2. `predicate` *(Function)*:

#### Returns
*(Array)*: A filtered array

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
