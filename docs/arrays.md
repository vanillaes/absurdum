# Type: Array

## Operators

### arrays.filter(array, predicate)

Filter iterates over an array of values and only outputs values where `predicate = true`.

```javascript
let result = arrays.filter([1, 2, 3, 4], (x) => x % 2 === 0);
console.log(result)
> [ 2, 4 ]
```

### arrays.map(array, func)

Map iterates over an array of values and applies a function to each value

```javascript
let result = arrays.map([1, 2, 3, 4], (x) => x + 2);
console.log(result)
> [ 3, 4, 5, 6 ]
```

### arrays.reverse(array)

Returns an array in reverse order

```javascript
let result = arrays.reverse([1, 2, 3, 4]);
> [4, 3, 2, 1]
```

### arrays.tap(array, func)

Applies a function to each element in the array without mutating it

```javascript
let result = arrays.tap([1, 2, 3, 4], console.log);
console.log(result);
> 1
> 2
> 3
> 4
> [1, 2, 3, 4]
```
