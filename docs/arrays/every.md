# arrays.every

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="everyarray-predicate-thisarg"><code>every(array, predicate, thisArg)</code></h3>

Every method returns true if every element in the array satisfies the function
and false if any element in the array does not satisfy the function.

#### Arguments
1. `array` *(Array)*:
2. `predicate` *(Function)*: to be run against each element of the array
3. `thisArg` *(&#42;)*: of this

#### Returns
*(Boolean)*: if all elements in array satisfy function.

#### Example
```js
const result = arrays.every(["ham", "cheese", "bread"], (x) => x.length >= 3);
console.log(result);
> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
