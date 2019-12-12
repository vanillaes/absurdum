# objects.pick

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="pickobject-paths"><code>pick(object, [paths])</code></h3>

Pick returns a new object composed from the selected object properties.

#### Arguments
1. `object` *(object)*: input object
2. `[paths]` *(...(string|string&#91;&#93;))*: paths names of properties to be returned from an object

#### Returns
*(object)*: object with selected properties

#### Example
```js
const result = Objects.pick({ a: 'mixed', b34: 'toast', 45: 'pasta' }, 'a', 45);
console.log(result);
> { 45: 'pasta', a: 'mixed' }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
