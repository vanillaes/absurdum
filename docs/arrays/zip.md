# arrays.zip

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="ziparraya-arrayb-funca-b"><code>zip(arrayA, ArrayB, [func=(a,b)])</code></h3>

Zip applies a specified function to the corresponding elements of two sequences,
producing a sequence of the results.

#### Arguments
1. `arrayA` *(Array)*: input array
2. `ArrayB` *(Array)*: input array
3. `[func=(a,b)]` *(Function)*: to be applied to corresponding values

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
