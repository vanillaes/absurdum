# objects.findLastKey

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="findlastkeyobject-predicatex-thisarg"><code>findLastKey(object, [predicate=(x)], [thisArg])</code></h3>

FindLastKey returns the key of the last property value for which a supplied function returns true

#### Arguments
1. `object` *(object)*: input object
2. `[predicate=(x)]` *(function)*: function to test against object values
3. `[thisArg]` *(&#42;)*: value of this in a function call

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
