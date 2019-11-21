# arrays.fromPairs

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="frompairsarray"><code>fromPairs(array)</code></h3>

FromPairs takes an array of arrays with key-value pairs and returns an
object composed from key-value pairs.

#### Arguments
1. `array` *(Array)*: input key-value pairs in an array of arrays

#### Returns
*(object)*: object filtered to only include elemnts with a key from the filter

#### Example
```js
const result = objects.fromPairs([['age', 12034], ['name', 'Trair'],['state', 'Floating']]);
console.log(result);
> { age: 12034, name: 'Trair', state: 'Floating' }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
