# objects.transform

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="transformobject-func-accumulator"><code>transform(object, [func], [accumulator={}])</code></h3>

Transform works like reduce, except the accumulator is implicitly returned

#### Arguments
1. `object` *(object)*: input object
2. `[func]` *(function)*: iteratee function
3. `[accumulator={}]` *(Array|object)*: custom accumulator object

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
