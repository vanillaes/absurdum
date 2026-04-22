# strings.trimStart

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctiontrimstartstringstring-chars"><code>export function trimStart *(string(string, [chars])*</code></h3>

TrimStart trims any whitespace or the selected characters from the beginning of the string

#### Arguments
1. `string` *(string)*: input string
2. `[chars]` *(string): characters to remove from beginning of string &#42;(default ' ')*&#42;

#### Returns
*(string)*: string with the characters removed from beginning

#### Example
```js
const result = strings.trimStart('-_-abc-_-', '_-');
console.log(result);
> 'abc-_-'
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
