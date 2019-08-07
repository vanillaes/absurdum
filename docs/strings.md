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

### strings.padEnd(string, length, substr?)

PadEnd pads the end of a string.

PadStart pads the start of of a string.

If no `substr` is provided, it pads the string w/ spaces.

```javascript
const result = strings.padEnd('abcabc', 9);
console.log(result);
> abcabc   
```

If `length` is shorter than `string` it doesn't add any padding.

```javascript
const result = strings.padEnd('abcabc', 4);
console.log(result);
> abcabc
```

If `substr` is defined, it uses that for padding.

```javascript
const result = strings.padEnd('abcabc', 16, 'fun');
console.log(result);
> 'abcabcfunfunfunf'
```

### strings.padStart(string, length, substr?)

PadStart pads the start of of a string.

If no `substr` is provided, it pads the string w/ spaces.

```javascript
const result = strings.padStart('abcabc', 9);
console.log(result);
>    abcabc
```

If `length` is shorter than `string` it doesn't add any padding.

```javascript
const result = strings.padStart('abcabc', 4);
console.log(result);
> abcabc
```

If `substr` is defined, it uses that for padding.

```javascript
const result = strings.padStart('abcabc', 16, 'fun');
console.log(result);
> 'funfunfunfabcabc'
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
