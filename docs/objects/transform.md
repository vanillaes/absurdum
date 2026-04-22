# objects.transform

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctiontransformobjectobject-func-accumulator"><code>export function transform *(object(object, func, [accumulator])*</code></h3>

Transform works like reduce, except the accumulator is implicitly returned

#### Arguments
1. `object` *(object)*: input object
2. `func` *(Function)*: iteratee function
3. `[accumulator]` *(Array|object): custom accumulator object &#42;(default {})*&#42;

#### Returns
*(&#42;)*: returns accumulator object after the input object has been iterated over by the function.

#### Example
```js
const result = objects.transform({ harmony: 2, daft: 4, stripes: 6 }, function(acc, val, key) {
  acc[key] = val + 5 + '_' + idx;
});
console.log(result);
> { harmony: '7_0', daft: '9_1', stripes: '11_2' }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
