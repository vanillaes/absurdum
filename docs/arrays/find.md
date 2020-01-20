# arrays.find

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="findarray-predicate-thisargundefined"><code>find(array, predicate, [thisArg=undefined])</code></h3>

Find method returns the value of first element at which a provided function is true,
or undefined if no elements in the array satisfy the function.

#### Arguments
1. `array` *(Array)*: input array
2. `predicate` *(Function)*: to be run against each element of the array
3. `[thisArg=undefined]` *(&#42;)*: this argument in the function

#### Returns
*(&#42;)*: value of element that satisfied function.

#### Example
```js
const result = arrays.find([5, 12, 8, 130, 44], (x) => x > 10);
console.log(result);
> 12
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
