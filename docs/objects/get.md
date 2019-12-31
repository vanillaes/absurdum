# objects.get

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="getobject-path-defaultvalue"><code>get(object, path, [defaultValue])</code></h3>

Get, creates an array of values corresponding to paths of the object

#### Arguments
1. `object` *(object)*: input object
2. `path` *(Array|string)*: string or an array of strings describing paths to be returned from an object
3. `[defaultValue]` *(&#42;)*: value returned when path resolves undefined

#### Returns
*(&#42;)*: value found by object paths in object, or returns defaultValue if provided and return would otherwise be undefined

#### Example
```js
const result = objects.get({ front: [1, 3, 5], back: [37, 39] });
console.log(result, 'back[1]');
> 39
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
