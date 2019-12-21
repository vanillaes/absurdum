# arrays.unzip

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="unziparray"><code>unzip(array)</code></h3>

Performs a manipulation to undo the zip command

#### Arguments
1. `array` *(Array)*: input array

#### Returns
*(Array)*: an array of unique values

#### Example
```js
const result = arrays.unzip([['a', 'b', 'c'], [1, 2, 3], [true, false, true]]);
console.log(result);
> [['a', 1, true], ['b', 2, false], ['c', 3, true]]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
