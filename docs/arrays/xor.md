# arrays.xor

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="xorarrays"><code>xor(arrays)</code></h3>

Creates an array of unique values that is the symmetric difference of the given arrays

#### Arguments
1. `arrays` *(...Array)*: input arrays

#### Returns
*(Array)*: an array of unique values

#### Example
```js
const result = arrays.xor(['a', 1, [5]], ['b', 1, 'a'], ['b', 'c', 5]);
console.log(result);
> [[5], 'c', 5]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
