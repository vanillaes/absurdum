# objects.mapValues

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="mapvaluesobject-func"><code>mapValues(object, func)</code></h3>

MapKeys iterates over an object and applies a function to each value

#### Arguments
1. `object` *(Object)*: input object
2. `func` *(Function)*: map function

#### Returns
*(Object)*: object with mutated values

#### Example
```js
const result = objects.mapValues({ a: 1, b: 2, c: 3 }, value => `neat_${value}`);
console.log(result);
> { a: neat_1, b: neat_2, c: neat_3 }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
