<p align="center">
  <img src="https://raw.githubusercontent.com/vanillaes/absurdum/master/assets/Logo-banner%20[150x300].png" alt="Absurdum Logo">
</p>

-----

Absurdum is a Javascript utility library built with a focus on providing idempotent side-effect free 
functions and clear/readable modular source for tree shaking.

[![GitHub Releases](https://badgen.net/github/tag/vanillaes/absurdum)](https://github.com/vanillaes/absurdum/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillaes/absurdum)](https://www.npmjs.com/package/@vanillaes/absurdum)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/@vanillaes/absurdum)](https://bundlephobia.com/result?p=@vanillaes/absurdum)
[![MIT License](https://badgen.net/github/license/vanillaes/absurdum)](https://raw.githubusercontent.com/vanillaes/absurdum/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/absurdum/workflows/Latest/badge.svg)](https://github.com/vanillaes/absurdum/actions)
[![Release Status](https://github.com/vanillaes/absurdum/workflows/Release/badge.svg)](https://github.com/vanillaes/absurdum/actions)

## Features

- Explores the flexibility of Reduce
- Abstraction Free -> tree-shake friendly
- Functional -> all operators are side-effect free
- Polyfills -> includes operator polyfills for older browsers
- Modern -> works transparently with ESM *and* CJS
- Typescript -> typings are provided for all operators
- Intellisense -> supports code completions + inline documentation
- Well Tested -> includes 600+ tests covering every aspect

## Imports

This package provides a variety of entry-points for all JS platforms

### Browsers

All top-level operator namespaces (ie `[arrays, objects, strings]`) can be imported from the index

```javascript
import { arrays, objects, strings } from 'path/to/absurdum/index.js';
```

The minified version can be imported from

```javascript
import { arrays, objects, strings } from 'path/to/absurdum/index.min.js';
```

### Node/Bundlers (ESM)

Top-level ES module namespaces are provided for Node/Bundlers

```javascript
import { arrays, objects, strings } from '@vanillaes/absurdum';
```

Individual operators can be imported from their parent namespaces

```javascript
import { chunk, find } from '@vanillaes/absurdum/arrays';
import { assign, invert } from '@vanillaes/absurdum/objects';
import { camelCase, repeat } from '@vanillaes/absurdum/strings';
```

*Note: Webpack's tree-shaking algorithm doesn't handle multi-layered exports. To optimize bundle size, prefer individual operator imports.*

### Node/Legacy (CJS)

For Node users who rely on CommonJS, top-level namespaces are provided

```javascript
const arrays = require('@vanillaes/absurdum').arrays;
const objects = require('@vanillaes/absurdum').objects;
const strings = require('@vanillaes/absurdum').strings;
```

*Note: CJS entry-points are backward-compatible with all non-EOL versions of Node*

## Usage

Import an operator and feed it some inputs

```javascript
import { reverse } from '@vanillaes/absurdum/arrays';

const input = ['a', 'b', 'c', 'd'];
const output = reverse(input);
console.log(output);
// > ['d', 'c', 'b', 'a']
```

*Tip: For VSCode users. Input type-checking, intellisense, and inline documentation are all supported.*

## API Documentation

### Arrays

| Operator                            | Lodash            | Polyfills                     |
|-------------------------------------|-------------------|-------------------------------|
|[chunk][arrays.chunk]                |[_.chunk][]        |                               |
|[compact][arrays.compact]            |[_.compact][]      |                               |
|[difference][arrays.difference]      |[_.difference][]   |                               |
|[drop][arrays.drop]                  |[_.drop][]         |                               |
|[dropRight][arrays.dropRight]        |[_.dropRight][]    |                               |
|[fill][arrays.fill]                  |[_.fill][]         |[Array.prototype.fill][]       |
|[filter][arrays.filter]              |[_.filter][]       |                               |
|[find][arrays.find]                  |[_.find][]         |[Array.prototype.find][]       |
|[findIndex][arrays.findIndex]        |[_.findIndex][]    |[Array.prototype.findIndex][]  |
|[findLastIndex][arrays.findLastIndex]|[_.findLastIndex][]|                               |
|[flat][arrays.flat]                  |[_.flatten][]      |[Array.prototype.flat][]       |
|[frequency][arrays.frequency]        |                   |                               |
|[intersection][arrays.intersection]  |[_.intersection][] |                               |
|[map][arrays.map]                    |[_.map][]          |                               |
|[pull][arrays.pull]                  |[_.pull][]         |                               |
|[take][arrays.take]                  |[_.take][]         |                               |
|[takeRight][arrays.takeRight]        |[_.takeRight][]    |                               |
|[union][arrays.union]                |[_.union][]        |                               |
|[unique][arrays.unique]              |[_.uniq][]         |                               |
|[unzip][arrays.unzip]                |[_.unzip][]        |                               |
|[without][arrays.without]            |[_.without][]      |                               |
|[xor][arrays.xor]                    |[_.xor][]          |                               |
|[zip][arrays.zip]                    |[_.zip][]          |                               |

[arrays.chunk]: ./docs/arrays/chunk.md
[arrays.compact]: ./docs/arrays/compact.md
[arrays.difference]: ./docs/arrays/difference.md
[arrays.drop]: ./docs/arrays/drop.md
[arrays.dropRight]: ./docs/arrays/dropRight.md
[arrays.fill]: ./docs/arrays/fill.md
[arrays.filter]: ./docs/arrays/filter.md
[arrays.find]: ./docs/arrays/find.md
[arrays.findIndex]: ./docs/arrays/findIndex.md
[arrays.findLastIndex]: ./docs/arrays/findLastIndex.md
[arrays.flat]: ./docs/arrays/flat.md
[arrays.frequency]: ./docs/arrays/frequency.md
[arrays.intersection]: ./docs/arrays/intersection.md
[arrays.map]: ./docs/arrays/map.md
[arrays.pull]: ./docs/arrays/pull.md
[arrays.take]: ./docs/arrays/take.md
[arrays.takeRight]: ./docs/arrays/takeRight.md
[arrays.union]: ./docs/arrays/union.md
[arrays.unique]: ./docs/arrays/unique.md
[arrays.unzip]: ./docs/arrays/unzip.md
[arrays.without]: ./docs/arrays/without.md
[arrays.xor]: ./docs/arrays/xor.md
[arrays.zip]: ./docs/arrays/zip.md

[_.chunk]: https://lodash.com/docs/#chunk
[_.compact]: https://lodash.com/docs/#compact
[_.difference]: https://lodash.com/docs/#difference
[_.drop]: https://lodash.com/docs/#drop
[_.dropRight]: https://lodash.com/docs/#dropRight
[_.fill]: https://lodash.com/docs/#fill
[_.filter]: https://lodash.com/docs/#filter
[_.find]: https://lodash.com/docs/#find
[_.findIndex]: https://lodash.com/docs/#findIndex
[_.findLastIndex]: https://lodash.com/docs/#findLastIndex
[_.flatten]: https://lodash.com/docs/#flatten
[_.intersection]: https://lodash.com/docs/#intersection
[_.map]: https://lodash.com/docs/#map
[_.pull]: https://lodash.com/docs/#pull
[_.take]: https://lodash.com/docs/#take
[_.takeRight]: https://lodash.com/docs/#takeRight
[_.union]: https://lodash.com/docs/#union
[_.uniq]: https://lodash.com/docs/#uniq
[_.unzip]: https://lodash.com/docs/#unzip
[_.without]: https://lodash.com/docs/#without
[_.xor]: https://lodash.com/docs/#xor
[_.zip]: https://lodash.com/docs/#zip

[Array.prototype.fill]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
[Array.prototype.find]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
[Array.prototype.findIndex]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
[Array.prototype.flat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

### Objects

| Operator                            | Lodash            | Polyfills                     |
|-------------------------------------|-------------------|-------------------------------|
|[assign][objects.assign]             |[_.assign][]       |[Object.assign][]              |
|[at][objects.at]                     |[_.at][]           |                               |
|[defaults][objects.defaults]         |[_.defaults][]     |                               |
|[defaultsDeep][objects.defaultsDeep] |[_.defaultsDeep][] |                               |
|[entries][objects.entries]           |[_.toPairs][]      |[Object.entries][]             |
|[filter][objects.filter]             |[_.filter][]       |                               |
|[findKey][objects.findKey]           |[_.findKey][]      |                               |
|[findLastKey][objects.findLastKey]   |[_.findLastKey][]  |                               |
|[forIn][objects.forIn]               |[_.forIn][]        |                               |
|[fromEntries][objects.fromEntries]   |[_.fromPairs][]    |[Object.fromEntries][]         |
|[get][objects.get]                   |[_.get][]          |                               |
|[has][objects.has]                   |[_.has][]          |                               |
|[invert][objects.invert]             |[_.invert][]       |                               |
|[mapKeys][objects.mapKeys]           |[_.mapKeys][]      |                               |
|[mapValues][objects.mapValues]       |[_.mapValues][]    |                               |
|[merge][objects.merge]               |[_.merge][]        |                               |
|[pick][objects.pick]                 |[_.pick][]         |                               |
|[result][objects.result]             |[_.result][]       |                               |
|[transform][objects.transform]       |[_.transform][]    |                               |
|[values][objects.values]             |[_.values][]       |[Object.values][]              |

[objects.assign]: ./docs/objects/assign.md
[objects.at]: ./docs/objects/at.md
[objects.defaults]: ./docs/objects/defaults.md
[objects.defaultsDeep]: ./docs/objects/defaultsDeep.md
[objects.entries]: ./docs/objects/entries.md
[objects.exclude]: ./docs/objects/exclude.md
[objects.filter]: ./docs/objects/filter.md
[objects.findKey]: ./docs/objects/findKey.md
[objects.findLastKey]: ./docs/objects/findLastKey.md
[objects.forIn]: ./docs/objects/forIn.md
[objects.fromEntries]: ./docs/objects/fromEntries.md
[objects.get]: ./docs/objects/get.md
[objects.has]: ./docs/objects/has.md
[objects.invert]: ./docs/objects/invert.md
[objects.mapKeys]: ./docs/objects/mapKeys.md
[objects.mapValues]: ./docs/objects/mapValues.md
[objects.merge]: ./docs/objects/merge.md
[objects.pick]: ./docs/objects/pick.md
[objects.result]: ./docs/objects/result.md
[objects.transform]: ./docs/objects/transform.md
[objects.values]: ./docs/objects/values.md

[_.assign]: https://lodash.com/docs/#assign
[_.at]: https://lodash.com/docs/#at
[_.defaults]: https://lodash.com/docs/#defaults
[_.defaultsDeep]: https://lodash.com/docs/#defaultsDeep
[_.toPairs]: https://lodash.com/docs/#toPairs
[_.filter]: https://lodash.com/docs/#filter
[_.findKey]: https://lodash.com/docs/#findKey
[_.findLastKey]: https://lodash.com/docs/#findLastKey
[_.forIn]: https://lodash.com/docs/#forIn
[_.fromPairs]: https://lodash.com/docs/#fromPairs
[_.get]: https://lodash.com/docs/#get
[_.has]: https://lodash.com/docs/#has
[_.invert]: https://lodash.com/docs/#invert
[_.mapKeys]: https://lodash.com/docs/#mapKeys
[_.mapValues]: https://lodash.com/docs/#mapValues
[_.merge]: https://lodash.com/docs/#merge
[_.pick]: https://lodash.com/docs/#pick
[_.result]: https://lodash.com/docs/#result
[_.transform]: https://lodash.com/docs/#transform
[_.values]: https://lodash.com/docs/#values

[Object.assign]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
[Object.entries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
[Object.fromEntries]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
[Object.values]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

### Strings

| Operator                            | Lodash            | Polyfills                     |
|-------------------------------------|-------------------|-------------------------------|
|[camelCase][strings.camelCase]       |[_.camelCase][]    |                               |
|[chomp][strings.chomp]               |                   |                               |
|[deburr][strings.deburr]             |[_.deburr][]       |                               |
|[endsWith][strings.endswith]         |[_.endsWith][]     |[String.prototype.endsWith][]  |
|[includes][strings.includes]         |                   |[String.prototype.includes][]  |
|[kebabCase][strings.kebabCase]       |[_.kebabCase][]    |                               |
|[pad][strings.pad]                   |[_.pad][]          |                               |
|[padEnd][strings.padEnd]             |[_.padEnd][]       |[String.prototype.padEnd][]    |
|[padStart][strings.padStart]         |[_.padStart][]     |[String.prototype.padStart][]  |
|[pascalCase][strings.pascalCase]     |[_.startCase][]    |                               |
|[repeat][strings.repeat]             |[_.repeat][]       |[String.prototype.repeat][]    |
|[reverse][strings.reverse]           |                   |                               |
|[snakeCase][strings.snakeCase]       |[_.snakeCase][]    |                               |
|[startsWith][strings.startswith]     |[_.startsWith][]   |[String.prototype.startsWith][]|
|[trimEnd][strings.trimEnd]           |[_.trimEnd][]      |[String.prototype.trimEnd][]   |
|[trimStart][strings.trimStart]       |[_.trimStart][]    |[String.prototype.trimStart][] |
|[truncate][strings.truncate]         |[_.truncate][]     |                               |
|[words][strings.words]               |[_.words][]        |                               |

[strings.camelCase]: ./docs/strings/camelCase.md
[strings.chomp]: ./docs/strings/chomp.md
[strings.deburr]: ./docs/strings/deburr.md
[strings.endswith]: ./docs/strings/endsWith.md
[strings.includes]: ./docs/strings/includes.md
[strings.kebabCase]: ./docs/strings/kebabCase.md
[strings.pad]: ./docs/strings/pad.md
[strings.padEnd]: ./docs/strings/padEnd.md
[strings.padStart]: ./docs/strings/padStart.md
[strings.pascalCase]: ./docs/strings/pascalCase.md
[strings.repeat]: ./docs/strings/repeat.md
[strings.reverse]: ./docs/strings/reverse.md
[strings.snakeCase]: ./docs/strings/snakeCase.md
[strings.startswith]: ./docs/strings/startsWith.md
[strings.trimEnd]: ./docs/strings/trimEnd.md
[strings.trimStart]: ./docs/strings/trimStart.md
[strings.truncate]: ./docs/strings/truncate.md
[strings.words]: ./docs/strings/words.md

[_.camelCase]: https://lodash.com/docs/#camelCase
[_.deburr]: https://lodash.com/docs/#deburr
[_.endsWith]: https://lodash.com/docs/#endsWith
[_.kebabCase]: https://lodash.com/docs/#kebabCase
[_.pad]: https://lodash.com/docs/#pad
[_.padEnd]: https://lodash.com/docs/#padEnd
[_.padStart]: https://lodash.com/docs/#padStart
[_.startCase]: https://lodash.com/docs/#startCase
[_.repeat]: https://lodash.com/docs/#repeat
[_.snakeCase]: https://lodash.com/docs/#snakeCase
[_.startsWith]: https://lodash.com/docs/#startsWith
[_.trimEnd]: https://lodash.com/docs/#trimEnd
[_.trimStart]: https://lodash.com/docs/#trimStart
[_.truncate]: https://lodash.com/docs/#truncate
[_.words]: https://lodash.com/docs/#words

[String.prototype.endsWith]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
[String.prototype.includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
[String.prototype.padEnd]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
[String.prototype.padStart]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
[String.prototype.repeat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
[String.prototype.startsWith]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
[String.prototype.trimEnd]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd
[String.prototype.trimStart]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart
