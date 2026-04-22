# arrays.findLastIndex

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionfindlastindexarrayarray-predicate-thisarg"><code>export function findLastIndex *(array(array, predicate, [thisArg])*</code></h3>

FindLastIndex method returns the value of Last element at which a provided function is true,
or undefined if no elements in the array satisfy the function.

#### Arguments
1. `array` *(T&#91;&#93;)*: input array
2. `predicate` *(Function)*: to be run against each element of the array
3. `[thisArg]` *(&#42;)*: this argument in the function

#### Returns
*(&#42;)*: value of element that satisfied function.

#### Example
```js
const result = arrays.findLastIndex([5, 12, 8, 130, 44], (x) => x < 10);
console.log(result);
> 2
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
