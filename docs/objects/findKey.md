# objects.findKey

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="findkeyobject-predicatex-thisarg"><code>findKey(object, [predicate=(x)], [thisArg])</code></h3>

FindKey returns the key of the first property value for which a supplied function returns true

#### Arguments
1. `object` *(object)*: input object
2. `[predicate=(x)]` *(function)*: function to test against object values
3. `[thisArg]` *(&#42;)*: value of this in a function call

#### Returns
*(string)*: string of the first object key whose value returns truthy against the function

#### Example
```js
const result = Objects.findKey({ apple: 34, pear: 434, orange: 4 }, x => x > 100 );
console.log(result);
> 'pear'
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
