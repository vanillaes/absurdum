# strings.pad

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="padstring-length-substr"><code>pad(string, length, [substr=' '])</code></h3>

Pads the both ends of a string w/ repeated spaces|substrings

#### Arguments
1. `string` *(string)*: input string
2. `length` *(number)*: length of the padded portion
3. `[substr=' ']` *(string)*: substring to apply

#### Returns
*(string)*: the input padded w/ spaces|substrings

#### Example
```js
// if no `substr` is provided, it pads the string w/ spaces
const result = strings.pad('xyzxyz', 9);
console.log(result);
> ' xyzxyz  '
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
