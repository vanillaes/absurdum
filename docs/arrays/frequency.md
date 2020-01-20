# arrays.frequency

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="frequencyarray"><code>frequency(array)</code></h3>

Frequency returns an object mapping each unique item in an array
to the number of items it occurs in the array.

#### Arguments
1. `array` *(Array)*: input array

#### Returns
*(Object)*: object of uniq values and their frequency of occurrence

#### Example
```js
const result = arrays.frequency(['a', 'b', 'a', 'c', 'a', 'c', 'b']);
console.log(result)
> { a: 3, b: 2, c: 2 }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
