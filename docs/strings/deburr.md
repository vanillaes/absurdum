# strings.deburr

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="deburrstring"><code>deburr([string=''])</code></h3>

Deburrs string by converting all complex Latin characters to basic Latin letters in a string.

#### Arguments
1. `[string='']` *(string)*: input string

#### Returns
*(string)*: returns simplified string

#### Example
```js
const result = strings.deburr('_ŁŐúnged\ufe2f_');
console.log(result);
> '_LOunged_'
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
