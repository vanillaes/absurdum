# Type: String

## Operators

### strings.endsWith(string, substr)

EndsWith tests a string to see if it ends with a substring

```javascript
let result = strings.endsWith('This sentence ends with', 'with');
console.log(result);
> true
```

```javascript
let result = strings.endsWith('This sentence does not end with', 'nope');
console.log(result);
> false
```

### strings.startsWith(string, substr)

StartsWith tests a string to see if it starts with a substring

```javascript
let result = strings.startsWith('This sentence starts with', 'This');
console.log(result);
> true
```

```javascript
result = strings.startsWith('This sentence does not start with', 'Nope');
console.log(result);
> false
```
