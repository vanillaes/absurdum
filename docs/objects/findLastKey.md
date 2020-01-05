# objects.findLastKey

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="findlastkeyobject-predicateidentity-thisargundefined"><code>findLastKey(object, [predicate=identity], [thisArg=undefined])</code></h3>

FindLastKey returns the key of the last property value for which a supplied function returns true

#### Arguments
1. `object` *(object)*: input object
2. `[predicate=identity]` *(function)*: optional function to test against object values
3. `[thisArg=undefined]` *(&#42;)*: optional this in a function call

#### Returns
*(string)*: string of the first object key whose value returns truthy against the function

#### Example
```js
const result = Objects.findLastKey({ apple: 34, pear: 434, orange: 4, grapefruit: 212 }, x => x > 100 );
console.log(result);
> 'grapefruit'
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
