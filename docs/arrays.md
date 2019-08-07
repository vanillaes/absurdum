# Type: Array

## Operators

### arrays.chunk(array, size=1)

Splits an array up into an array of equal size chunks.

```javascript
const result = arrays.chunk([1, 2, 3, 4, 5], 2);
console.log(result);
> [[1, 2], [3, 4], [5]]
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
