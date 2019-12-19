# objects.findKey

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="findkeyobject-predicateidentity-thisargundefined"><code>findKey(object, [predicate=identity], [thisArg=undefined])</code></h3>

FindKey returns the key of the first property value for which a supplied function returns true

#### Arguments
1. `object` *(object)*: input object
2. `[predicate=identity]` *(function)*: optional function to test against object values
3. `[thisArg=undefined]` *(&#42;)*: optional this in a function call

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
