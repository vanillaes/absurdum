# strings.padEnd

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="padendstring-length0-substr"><code>padEnd(string, [length=0], [substr=' '])</code></h3>

Pads the end of a string w/ repeated spaces|substrings

#### Arguments
1. `string` *(string)*: input string
2. `[length=0]` *(number)*: length of the padded portion
3. `[substr=' ']` *(string)*: substring to apply

#### Returns
*(string)*: the input padded w/ spaces|substrings

#### Example
```js
// if no `substr` is provided, it pads the string w/ spaces
const result = strings.padEnd('abcabc', 9);
console.log(result);
> abcabc
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
