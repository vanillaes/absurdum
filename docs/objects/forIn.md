# objects.forIn

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="forinobject-func"><code>forIn(object, func)</code></h3>

forIn Iterates over own and inherited enumerable string keyed properties of an object and invokes
iteratee for each property. The iteratee is invoked with three arguments: *(value, key, object)*

#### Arguments
1. `object` *(Object)*: input object
2. `func` *(Function)*: function invoked per iteration

#### Returns
*(Object)*: original object

#### Example
```js
const Obj_A = function () {
  this.a = 5;
  this.b = 10;
}
Obj_A.prototype.c = 15;
const result = objects.forIn(new Obj_A, (v, k, o) => console.log(v));
console.log(result);
// 5
// 10
// 15
> { a: 5, b: 10 }
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
