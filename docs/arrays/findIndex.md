# arrays.findIndex

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionfindindexarrayarray-predicate-thisarg"><code>export function findIndex *(array(array, predicate, [thisArg])*</code></h3>

FindIndex method returns the value of First element at which a provided function is true,
or `-1` if no elements in the array satisfy the function.

#### Arguments
1. `array` *(T&#91;&#93;)*: input array
2. `predicate` *(Function)*: to be run against each element of the array
3. `[thisArg]` *(&#42;)*: this argument in the function

#### Returns
*(&#42;)*: value of element that satisfied function.

#### Example
```js
const result = arrays.findIndex([5, 12, 8, 130, 44], (x) => x < 10);
console.log(result);
> 0
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
