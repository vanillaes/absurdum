# strings.words

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="wordsstring-pattern"><code>words([string=''], [pattern])</code></h3>

Splits `string` into an array of its words.

#### Arguments
1. `[string='']` *(string)*: string to inspect for words
2. `[pattern]` *(RegExp|string)*: regex pattern to match words or string of characters to split words by.

#### Returns
*(Array)*: Returns an array of words

#### Example
```js
const result = words('I can, I should, & I will');
console.log(result);
// => ['I', 'can', 'I', 'should', 'I', 'will']
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
