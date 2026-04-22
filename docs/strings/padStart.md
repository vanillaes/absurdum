# strings.padStart

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="acc"><code>acc</code></h3>



---

<!-- /div -->

<!-- /div -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionpadstartstringstring-length-substr"><code>export function padStart *(string(string, [length], [substr])*</code></h3>

PadStart pads the start of of a string.

#### Arguments
1. `string` *(string)*: input string
2. `[length]` *(number): length of the padded portion &#42;(default `0`)*&#42;
3. `[substr]` *(string): substring to apply &#42;(default ' ')*&#42;

#### Returns
*(string)*: the input padded w/ spaces|substrings

#### Example
```js
// if no `substr` is provided, it pads the string w/ spaces
const result = strings.padStart('abcabc', 9);
console.log(result);
>    abcabc
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
