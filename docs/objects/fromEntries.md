# objects.fromEntries

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="fromentriesarray"><code>fromEntries(array)</code></h3>

FromEntries takes an array of arrays with key-value pairs and returns an
object composed from key-value pairs.

#### Arguments
1. `array` *(Array)*: input key-value pairs in an array of arrays

#### Returns
*(object)*: an object composed from the key-value pairs

#### Example
```js
const result = objects.fromEntries([['age', 12034], ['name', 'Trair'],['state', 'Floating']]);
console.log(result);
> { age: 12034, name: 'Trair', state: 'Floating' }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
