# objects.mapKeys

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="mapkeysobject-func"><code>mapKeys(object, func)</code></h3>

MapKeys iterates over an object of values and applies a function to each key

#### Arguments
1. `object` *(Object)*: input object
2. `func` *(Function)*: map function

#### Returns
*(Object)*: object with mutated keys

#### Example
```js
const result = objects.mapKeys({ a: 1, b: 2, c: 3 }, value => `neat_${value}`);
console.log(result);
> { neat_1: 1, neat_2: 2, neat_3: 3 }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
