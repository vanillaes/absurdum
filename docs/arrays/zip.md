# arrays.zip

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionziparrayaarraya-arrayb-func"><code>export function zip *(arrayA(arrayA, ArrayB, [func])*</code></h3>

Zip applies a specified function to the corresponding elements of two sequences,
producing a sequence of the results.

#### Arguments
1. `arrayA` *(T&#91;&#93;)*: input array
2. `ArrayB` *(T&#91;&#93;)*: input array
3. `[func]` *(Function): to be applied to corresponding values &#42;(default (a, b)=>&#91;a, b&#93;)*&#42;

#### Returns
*(&#42;)*: input array filled value pairs after the function has been applied

#### Example
```js
const result = zip([5, 12, 8, 130, 44], ["ham", "cheese", "bread"]);
console.log(result)
> [ [ 'ham', 5 ], [ 'cheese', 12 ], [ 'bread', 8 ] ]
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->


<!-- div -->

<h3 id="res"><code>res</code></h3>



---

<!-- /div -->

<!-- div -->

<h3 id="res"><code>res</code></h3>



---

<!-- /div -->

<!-- /div -->

<!-- /div -->
