# arrays.some

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="somearray-predicate-thisargundefined"><code>some(array, predicate, [thisArg=undefined])</code></h3>

Some method returns true if any element in the array satisfies the function
and false if no element in the array satisfies the function.

#### Arguments
1. `array` *(Array)*: input array
2. `predicate` *(Function)*: function to be run against each element of the array
3. `[thisArg=undefined]` *(&#42;)*: A value to use as this when executing predicate.

#### Returns
*(Boolean)*: if any of the elements in array satisfy the function.

#### Example
```js
const result = arrays.some(["ham", "cheese", "bread"], (x) => x.length === 3);
console.log(result);
> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
