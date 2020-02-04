# strings.trimEnd

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="trimendstring-chars"><code>trimEnd([string], [chars=' '])</code></h3>

TrimEnd trims any whitespace or the selected characters from the end of the string

#### Arguments
1. `[string]` *(string)*: input string
2. `[chars=' ']` *(string)*: characters to remove from end of the string

#### Returns
*(string)*: string with the characters removed from end of the string

#### Example
```js
const result = strings.trimEnd('-_-abc-_-', '_-');
console.log(result);
> '-_-abc'
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
