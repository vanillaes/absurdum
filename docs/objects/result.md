# objects.result

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="resultobject-path-defaultvalue"><code>result(object, path, [defaultValue])</code></h3>

Result, creates an array of values corresponding to paths of the object. If value is a function, returns result of calling function

#### Arguments
1. `object` *(object)*: input object
2. `path` *(Array|string)*: string or an array of strings describing paths to be returned from an object
3. `[defaultValue]` *(&#42;)*: value returned when path resolves undefined

#### Returns
*(&#42;)*: value found by object paths in object, or returns defaultValue if provided and return would otherwise be undefined

#### Example
```js
const obj = { front: [1, 3, 5], back: [() => 15, () => 19] };
console.log(objects.result(obj, 'back[1]'));
> 19
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
