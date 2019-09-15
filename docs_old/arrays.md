# Type: Array

## Operators

### arrays.map(array, func)

Map iterates over an array of values and applies a function to each value

```javascript
const result = arrays.map([1, 2, 3, 4], (x) => x + 2);
console.log(result)
> [ 3, 4, 5, 6 ]
```

### arrays.reduceRight(array, reducer = () => array, initial = [])

Reduce right performs reduce in reverse order (ie last->first). The reducer parameter follows the standard API (ie reducer(accumulator, current, index, array)). The initial parameter can be used to set the starting value for the accumulator.

```javascript
const result = arrays.reduceRight(['a', 'b', 'c', 'd'], (acc, curr, idx, arr) => {
  acc.push(curr);
  return acc;
});
console.log(result);
> ['d', 'c', 'b', 'a'];
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
