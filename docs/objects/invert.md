# objects.invert

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="invertobject"><code>invert(object)</code></h3>

Create a new object with key-value pairs inverted, in the case of duplicate values the latter value
will overwrite the previous value.

#### Arguments
1. `object` *(object)*: input string

#### Returns
*(object)*: returns an object with key-value pairs inverted

#### Example
```js
const result = Objects.invert({ a: 1, b: 2, c: 1 });
console.log(result);
> { '1': 'c', '2': 'b' }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
