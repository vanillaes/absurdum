# Type: String

## Operators

### strings.endsWith(string, substr)

EndsWith tests a string to see if it ends with a substring

```javascript
const result = strings.endsWith('This sentence ends with', 'with');
console.log(result);
> true
```

```javascript
const result = strings.endsWith('This sentence does not end with', 'nope');
console.log(result);
> false
```

### strings.reverse(string)

Reverse takes an returns a reversed version of the string input.

```javascript
const result = strings.reverse('This string will be reversed');
console.log(result);
> desrever eb lliw gnirts sihT
```

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
