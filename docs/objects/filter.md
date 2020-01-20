# objects.filter

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="filterobject-filter"><code>filter(object, [filter])</code></h3>

Filter iterates over an object and applies a predicate to each property, for all properties
where the predicate is true, return that property in a new object. Function is invoked
with `3` arguments *(value, key, object)*

#### Arguments
1. `object` *(Object)*: input object
2. `[filter]` *(Function)*: predicate function to check what properties to include

#### Returns
*(Object)*: object with selected properties

#### Example
```js
const obj = { small: "ant", medium: "dog", big: "elephant" }
const result = objects.filter(obj, (value, key, object) => ['small', 'big'].includes(key)));
console.log(result);
> { small: "ant", big: "elephant" }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
