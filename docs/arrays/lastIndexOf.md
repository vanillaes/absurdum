# arrays.lastIndexOf

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="lastindexofarray-searchelement-fromindexarraylength-1"><code>lastIndexOf(array, searchElement, [fromIndex=array.length-1])</code></h3>

LastIndexOf method returns the first index at which a given element can be found in the array
going from right to left and beginning at the end index, or returns `-1` if it is not present.

#### Arguments
1. `array` *(Array)*:
2. `searchElement` *(number)*: to be looked for in the array
3. `[fromIndex=array.length-1]` *(number)*: index in array to begin searching for searchElement from right to left

#### Returns
*(number)*: a integer representing the first index in the array that contains the element from right to left

#### Example
```js
const result = arrays.lastIndexOf([1,2,3,4,5,4], 4, 4));
console.log(result);
> 3
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
