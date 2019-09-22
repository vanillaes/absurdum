# arrays.fill

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="fillarray-value-start0-end"><code>fill(array, value, [start=0], [end])</code></h3>

Fills items in an array with a specified value. *(Optional)* can start and/or end from a specific index.

#### Arguments
1. `array` *(Array)*: input array
2. `value` *(&#42;)*: value that fills the array
3. `[start=0]` *(number)*: start index
4. `[end]` *(number)*: end index

#### Returns
*(Array)*: input array filled w/ the value

#### Example
```js
const result = arrays.fill([1, 2, 3, 4], 'a', 1, 2);
console.log(result)
> [1, 'a', 'a', 4]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
