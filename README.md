[![GitHub Releases](https://img.shields.io/github/release/vanillaes/absurdum.svg)](https://github.com/vanillaes/absurdum/releases)
[![NPM Releases](https://img.shields.io/npm/v/absurdum.svg)](https://www.npmjs.com/package/absurdum)
[![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillaes/absurdum/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/absurdum/workflows/Latest/badge.svg)](https://github.com/vanillaes/absurdum/actions)
[![Release Status](https://github.com/vanillaes/absurdum/workflows/Release/badge.svg)](https://github.com/vanillaes/absurdum/actions)

# Absurdum

> "if all you have is a hammer, everything looks like a nail" - Maslow's Hammer

In this package, [Array.prototype.reduce][] is the hammer

## Why the Funky Name?

It's a play on the latin phrase [Reductio ad absurdum][wikipedia]

> In logic, reductio ad absurdum (Latin for "reduction to absurdity"; or argumentum ad absurdum, "argument to absurdity") is a form of argument which attempts either to disprove a statement by showing it inevitably leads to a ridiculous, absurd, or impractical conclusion, or to prove one by showing that if it were not true, the result would be absurd or impossible.

It is often said that of the big trio `map`, `filter`, and `reduce`, the first two are redundant. In fact, it's trivial to implement both `map` and `filter` using `reduce`.

This library exists to take that concept to an absurd extreme by using `reduce` to implement as many different types of functional transforms as possible.

## What's the Point?

- It's a challenge
- It's good practice
- It forces you to code/think in a functional manner
- Who cares, it's fun

...and just maybe, new patterns/practice will emerge from pushing `reduce` to its limits.

## Usage

Import the desired namespace then call the operator from it

```javascript
import { arrays } from 'absurdum';

const input = ['a', 'b', 'c', 'd'];
const output = arrays.reverse(input);
console.log(output);
// > ['d', 'c', 'b', 'a']
```

## API Documentation

### Arrays

- [chunk][arrays.chunk]
- [compact][arrays.compact]
- [concat][arrays.concat]
- [difference][arrays.difference]
- [drop][arrays.drop]
- [dropRight][arrays.dropRight]
- [every][arrays.every]
- [fill][arrays.fill]
- [filter][arrays.filter]
- [find][arrays.find]
- [findIndex][arrays.findIndex]
- [findLastIndex][arrays.findLastIndex]
- [flat][arrays.flat]
- [flatten][arrays.flatten]
- [fromPairs][arrays.fromPairs]
- [indexOf][arrays.indexOf]
- [join][arrays.join]
- [intersection][arrays.intersection]
- [lastIndexOf][arrays.lastIndexOf]
- [map][arrays.map]
- [pull][arrays.pull]
- [reduceRight][arrays.reduceRight]
- [reverse][arrays.reverse]
- [slice][arrays.slice]
- [some][arrays.some]
- [take][arrays.take]
- [takeRight][arrays.takeRight]
- [tap][arrays.tap]
- [union][arrays.union]
- [unique][arrays.unique]
- [zip][arrays.zip]

[arrays.chunk]: ./docs/arrays/chunk.md
[arrays.compact]: ./docs/arrays/compact.md
[arrays.concat]: ./docs/arrays/concat.md
[arrays.difference]: ./docs/arrays/difference.md
[arrays.drop]: ./docs/arrays/drop.md
[arrays.dropRight]: ./docs/arrays/dropRight.md
[arrays.every]: ./docs/arrays/every.md
[arrays.fill]: ./docs/arrays/fill.md
[arrays.filter]: ./docs/arrays/filter.md
[arrays.find]: ./docs/arrays/find.md
[arrays.findIndex]: ./docs/arrays/findIndex.md
[arrays.findLastIndex]: ./docs/arrays/findLastIndex.md
[arrays.flat]: ./docs/arrays/flat.md
[arrays.flatten]: ./docs/arrays/flatten.md
[arrays.fromPairs]: ./docs/arrays/fromPairs.md
[arrays.indexOf]: ./docs/arrays/indexOf.md
[arrays.join]: ./docs/arrays/join.md
[arrays.intersection]: ./docs/arrays/intersection.md
[arrays.lastIndexOf]: ./docs/arrays/lastIndexOf.md
[arrays.map]: ./docs/arrays/map.md
[arrays.pull]: ./docs/arrays/pull.md
[arrays.reduceRight]: ./docs/arrays/reduceRight.md
[arrays.reverse]: ./docs/arrays/reverse.md
[arrays.slice]: ./docs/arrays/slice.md
[arrays.some]: ./docs/arrays/some.md
[arrays.tap]: ./docs/arrays/tap.md
[arrays.take]: ./docs/arrays/take.md
[arrays.takeRight]: ./docs/arrays/takeRight.md
[arrays.union]: ./docs/arrays/union.md
[arrays.unique]: ./docs/arrays/unique.md
[arrays.zip]: ./docs/arrays/zip.md

### Objects

- [exclude][objects.exclude]
- [include][objects.include]
- [keys][objects.keys]

[objects.exclude]: ./docs/objects/exclude.md
[objects.include]: ./docs/objects/include.md
[objects.keys]: ./docs/objects/keys.md

### Strings

- [chomp][strings.chomp]
- [endsWith][strings.endswith]
- [includes][strings.includes]
- [indexOf][strings.indexOf]
- [padEnd][strings.padEnd]
- [padStart][strings.padStart]
- [repeat][strings.repeat]
- [reverse][strings.reverse]
- [startsWith][strings.startswith]

[strings.chomp]: ./docs/strings/chomp.md
[strings.endswith]: ./docs/strings/endsWith.md
[strings.includes]: ./docs/strings/includes.md
[strings.indexOf]: ./docs/strings/indexOf.md
[strings.padEnd]: ./docs/strings/padEnd.md
[strings.padStart]: ./docs/strings/padStart.md
[strings.repeat]: ./docs/strings/repeat.md
[strings.reverse]: ./docs/strings/reverse.md
[strings.startswith]: ./docs/strings/startsWith.md

<!-- ### Elements -->

[Array.prototype.reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[wikipedia]: https://en.wikipedia.org/wiki/Reductio_ad_absurdum
[operator]: https://github.com/evanplaice/absurdum/issues/new?title=Operator([operator])&template=OPERATOR_TEMPLATE.md&labels=enhancement,operator
[type]: https://github.com/evanplaice/absurdum/issues/new?title=Type([typ])&template=TYPE_TEMPLATE.md&labels=enhancement,type
[feature-workflow]:https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
