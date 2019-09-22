# arrays.compact

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="compactarray"><code>compact(array)</code></h3>

Compact removes all falsy values `[false, null, 0, "", undefined, NaN]` from an array.

#### Arguments
1. `array` *(Array)*: input array

#### Returns
*(Array)*: the input array w/ no falsy values

#### Example
```js
const result = arrays.compact([1, false, 2, null, 3, 0, 4, "", 5, undefined, 6, NaN]);
console.log(result);
> [1, 2, 3, 4, 5, 6]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
