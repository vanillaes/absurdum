# Type: Array

## Operators

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
