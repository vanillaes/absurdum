# arrays.compact

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="compactarray"><code>compact(array)</code></h3>

Returns an array with all falsy `[false, null, 0, "", undefined, NaN]` values removed.

#### Arguments
1. `array` *(Array)*:

#### Returns
*(Array)*: the compacted array

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
