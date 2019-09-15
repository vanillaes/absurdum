[![npm](https://img.shields.io/npm/v/absurdum.svg)](https://www.npmjs.com/package/absurdum)

# Absurdum

## Why the Funky Name?

It's a play on the latin phrase [Reductio ad absurdum][wikipedia]

> In logic, reductio ad absurdum (Latin for "reduction to absurdity"; or argumentum ad absurdum, "argument to absurdity") is a form of argument which attempts either to disprove a statement by showing it inevitably leads to a ridiculous, absurd, or impractical conclusion, or to prove one by showing that if it were not true, the result would be absurd or impossible.

It is often said that of the big trio **Map**, **Filter**, and **Reduce**, that reduce is by far the most flexible. In fact, it's trivial to implement both map and filter using reduce.

This library exists to take that concept to an absurd extreme by experimenting with leveraging reduce to produce as many different types functional transforms as possible.

## What's the Point?

Who cares, it's fun. It's good practice. It's a challenging approach to practice transforming data in a purely function manner. At some point, Javscript will include the pipeline operator and these may actually become useful. If you're up for the challenge give it a try.

## Operator(s) Documentation

### Arrays

- [chunk][arrays.chunk]
- [compact][arrays.compact]
- [concat][arrays.concat]
- [difference][arrays.difference]
- [drop][arrays.drop]
- [dropRight][arrays.dropRight]
- [fill][arrays.fill]
- [filter][arrays.filter]
- [map][arrays.map]
- [reduceRight][arrays.reduceRight]
- [reverse][arrays.reverse]
- [tap][arrays.tap]

[arrays.chunk]: ./docs/arrays/chunk.md
[arrays.compact]: ./docs/arrays/compact.md
[arrays.concat]: ./docs/arrays/concat.md
[arrays.difference]: ./docs/arrays/difference.md
[arrays.drop]: ./docs/arrays/drop.md
[arrays.dropRight]: ./docs/arrays/dropRight.md
[arrays.fill]: ./docs/arrays/fill.md
[arrays.filter]: ./docs/arrays/filter.md
[arrays.map]: ./docs/arrays/map.md
[arrays.reduceRight]: ./docs/arrays/reduceRight.md
[arrays.reverse]: ./docs/arrays/reverse.md
[arrays.tap]: ./docs/arrays/tap.md

### Objects

### Strings

- [endsWith][strings.endswith]
- [padEnd][strings.padEnd]
- [padStart][strings.padStart]
- [reverse][strings.reverse]
- [startsWith][strings.startswith]

[strings.endswith]: ./docs/strings/endsWith.md
[strings.padEnd]: ./docs_old/strings.md#stringspadendstring-length-substr
[strings.padStart]: ./docs_old/strings.md#stringspadstartstring-length-substr
[strings.reverse]: ./docs_old/strings.md#stringsreversestring
[strings.startswith]: ./docs_old/strings.md#stringsstartswithstring-substr

### HTML


[wikipedia]: https://en.wikipedia.org/wiki/Reductio_ad_absurdum
[operator]: https://github.com/evanplaice/absurdum/issues/new?title=Operator([operator])&template=OPERATOR_TEMPLATE.md&labels=enhancement,operator
[type]: https://github.com/evanplaice/absurdum/issues/new?title=Type([typ])&template=TYPE_TEMPLATE.md&labels=enhancement,type
[feature-workflow]:https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
