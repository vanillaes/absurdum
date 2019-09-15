# Type: String

## Operators

### strings.startsWith(string, substr)

StartsWith tests a string to see if it starts with a substring

```javascript
const result = strings.startsWith('This sentence starts with', 'This');
console.log(result);
> true
```

```javascript
const result = strings.startsWith('This sentence does not start with', 'Nope');
console.log(result);
> false
```
