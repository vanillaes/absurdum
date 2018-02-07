# Type: Array

## Operators

### arrays.filter(arr, predicate)

Filter iterates over an array of values and only outputs values where `predicate = true`.

```javascript
let result = arrays.filter([1, 2, 3, 4], (x) => x % 2 === 0);
console.log(result)
> [ 2, 4 ]
```

### arrays.map(arr, function)

Map iterates over an array of values and applies a function to each value

```javascript
let result = arrays.map([1, 2, 3, 4], (x) => x + 2);
console.log(result)
> [ 3, 4, 5, 6 ]
```

### arrays.reverse(arr)

Returns an array in reverse order

```javascript
let result = arrays.reverse([1, 2, 3, 4]);
> [4, 3, 2, 1]
```