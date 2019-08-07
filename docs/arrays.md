# Type: Array

## Operators

### arrays.chunk(array, size=1)

Splits an array up into an array of equal size chunks.

```javascript
const result = arrays.chunk([1, 2, 3, 4, 5], 2);
console.log(result);
> [[1, 2], [3, 4], [5]]
```

### arrays.compact(array)

Returns an array with all falsy `[false, null, 0, "", undefined, NaN]` values removed.

```javascript
const result = arrays.compact([1, false, 2, null, 3, 0, 4, "", 5, undefined, 6, NaN]);
console.log(result);
> [1, 2, 3, 4, 5, 6]
```

### arrays.concat(...arrays)

Concat takes any number or arrays or values as input. The arrays can be any level of depth. The output will be a single, one-dimensional array containing all the values.

```javascript
const result = arrays.concat([1], 2, [3], [[4]]);
console.log(result);
> [1, 2, 3, 4]'
```

### arrays.filter(array, predicate)

Filter iterates over an array of values and only outputs values where `predicate = true`.

```javascript
const result = arrays.filter([1, 2, 3, 4], (x) => x % 2 === 0);
console.log(result)
> [ 2, 4 ]
```

### arrays.map(array, func)

Map iterates over an array of values and applies a function to each value

```javascript
const result = arrays.map([1, 2, 3, 4], (x) => x + 2);
console.log(result)
> [ 3, 4, 5, 6 ]
```

### arrays.reverse(array)

Returns an array in reverse order

```javascript
const result = arrays.reverse([1, 2, 3, 4]);
> [4, 3, 2, 1]
```

### arrays.tap(array, func)

Applies a function to each element in the array without mutating it

```javascript
const result = arrays.tap([1, 2, 3, 4], console.log);
console.log(result);
> 1
> 2
> 3
> 4
> [1, 2, 3, 4]
```
