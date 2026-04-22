# strings.truncate

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctiontruncatestringstring-options-optionslength-optionsomission-optionsseparator"><code>export function truncate *(string(string, [options], [options.length], [options.omission], [options.separator])*</code></h3>

Truncates string if it's longer than the given maximum string length. The last characters
of the truncated string are replaced with the omission string which defaults to "...".

#### Arguments
1. `string` *(string)*: string to truncate
2. `[options]` *(object): object containing options &#42;(default {})*&#42;
3. `[options.length]` *(number): Max length of truncated string &#42;(default `30`)*&#42;
4. `[options.omission]` *(string): string to indicate omitted text &#42;(default '...')*&#42;
5. `[options.separator]` *(RegExp|string)*: the pattern to end truncation

#### Returns
*(string)*: returns truncated string

#### Example
```js
const result = strings.truncate('This sentence starts with', 'This');
console.log(result);
> true
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
