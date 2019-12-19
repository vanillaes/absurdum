# objects.at

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="atobject-paths"><code>at(object, paths)</code></h3>

At, creates an array of values corresponding to paths of the object

#### Arguments
1. `object` *(object)*: input object
2. `paths` *(...(string|string&#91;&#93;))*: strings describing paths to be returned from an object

#### Returns
*(array)*: array of values found by object paths in object

#### Example
```js
const result = objects.at({ a: [13, 64], ']': 'b' });
console.log(result, 'a[1]');
> [64]
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
