# objects.exclude

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="excludeobject-filter"><code>exclude(object, filter)</code></h3>

Exclude filters out elements from an object based on an array of keys to exclude

#### Arguments
1. `object` *(object)*: input string
2. `filter` *(array)*: array of keys to be excluded in the filtered object

#### Returns
*(object)*: object filtered to exclude elemnts with a key from the filter

#### Example
```js
const result = objects.exclude({ small: 'ant', medium: 'dog', big: 'elephant' }, ['small', 'big']);
console.log(result);
> { medium: "dog" }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
