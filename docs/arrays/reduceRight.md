# arrays.reduceRight

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="reducerightarray-reducer-initial"><code>reduceRight(array, reducer, [initial=[]])</code></h3>

Reduce right performs reduce in reverse order *(ie last->first). The reducer parameter follows the standard API (ie reducer(accumulator, current, index, array))*. The initial parameter can be used to set the starting value for the accumulator.

#### Arguments
1. `array` *(Array)*:
2. `reducer` *(Function)*:
3. `[initial=[]]` *(&#42;)*:

#### Returns
*(&#42;)*: The reduced value

#### Example
```js
const result = arrays.reduceRight(['a', 'b', 'c', 'd'], (acc, curr, idx, arr) => {
  acc.push(curr);
  return acc;
});
console.log(result);
> ['d', 'c', 'b', 'a'];
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
