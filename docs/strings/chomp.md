# strings.chomp

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctionchompstringstring-separator"><code>export function chomp *(string(string, [separator])*</code></h3>

Chomp removes record separator characters *(ex \n, \r, \r\n)* from the end of a string.

#### Arguments
1. `string` *(string)*: input string
2. `[separator]` *(string): separator removed from end of string &#42;(default '\r' | '\n' | '\r\n')*&#42;

#### Returns
*(string)*: does the input end with the substring?

#### Example
```js
const result = strings.chomp('Goldy\n\r\n');
console.log(result);
> 'Goldy\n'
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
