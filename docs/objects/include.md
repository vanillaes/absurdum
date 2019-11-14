# objects.include

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="includeobject-filter"><code>include(object, filter)</code></h3>

Include determines whether one string can be found in another string

#### Arguments
1. `object` *(object)*: input string
2. `filter` *(array)*: array of keys to be kept in the filtered object

#### Returns
*(object)*: object filtered to only include elemnts with a key from the filter

#### Example
```js
const result = objects.include({ small: "ant", medium: "dog", big: "elephant" }, ['small', 'big']);
console.log(result);
> { small: 'ant', big: 'elephant' }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
