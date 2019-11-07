# arrays.zip

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="ziparray1-array2-predicate"><code>zip(array1, array2, predicate)</code></h3>

Zip applies a specified function to the corresponding elements of two sequences,
producing a sequence of the results.

#### Arguments
1. `array1` *(Array)*: input array
2. `array2` *(Array)*: input array
3. `predicate` *(Function)*: optional to be applied to corresponding values

#### Returns
*(Array)*: input array filled value pairs after the function has been applied

#### Example
```js
const result = zip([5, 12, 8, 130, 44], ["ham", "cheese", "bread"]);
console.log(result)
> [ [ 'ham', 5 ], [ 'cheese', 12 ], [ 'bread', 8 ] ]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
