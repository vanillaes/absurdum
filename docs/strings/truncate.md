# strings.truncate

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="truncatestring-options"><code>truncate([string=''], [options={}])</code></h3>

Truncates string if it's longer than the given maximum string length. The last characters
of the truncated string are replaced with the omission string which defaults to "...".

#### Arguments
1. `[string='']` *(string)*: string to truncate
2. `[options={}]` *(Object)*: object containing options
3. `[options.length=30]` *(number)*: Max length of truncated string
4. `[options.omission='...']` *(string)*: string to indicate omitted text
5. `[options.separator]` *(RegExp|string)*: the pattern to end truncation

#### Returns
*(string)*: returns truncated string

#### Example
```js
const result = strings.truncate('This sentence starts with', 'This');
console.log(result);
> true
*
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
