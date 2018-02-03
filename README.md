# Absurdum

## Why the Funky Name?

It's a play on the latin phrase [Reductio ad absurdum][wikipedia]

> In logic, reductio ad absurdum (Latin for "reduction to absurdity"; or argumentum ad absurdum, "argument to absurdity") is a form of argument which attempts either to disprove a statement by showing it inevitably leads to a ridiculous, absurd, or impractical conclusion, or to prove one by showing that if it were not true, the result would be absurd or impossible.

It is often said that of the big trio **Map**, **Filter**, and **Reduce**, that reduce is by far the most flexible. In fact, it's trivial to implement both map and filter using reduce.

This library exists to take that concept to an absurd extreme by experimenting with leveraging reduce to produce as many different types functional transforms as possible.

## What's the Point?

Who cares, it's fun. It's good practice. It's a challenging approach to practice transforming data in a purely function manner. At some point, Javscript will include the pipeline operator and these may actually become useful. If you're up for the challenge give it a try.

## Rules of Engagement

Before I introduce the steps to begin, let's set some ground rules. You can implement an operator for anything you'd like but there are a few constraints.

1. You must use reduce in your solution, no map/filter/foreach
2. Your solution must be functional, with no side-effects
3. Recursion will be allowed for nexted data types
4. If recursion is used, it must be tail call optimized
5. Be mindful of performance
6. Use only vanilla JS, whatever features babel-preset-env supports

## Getting Started

This library is designed to make contributing as easy and simple as possible.

1. Fork the repo
2. Clone your fork
3. Create a *feature branch* named after your operator
4. Run `npm run start`, so webpack can watch for changes
5. Implement your operator
6. Add a test to verify its functionality
7. Add supporting documentation
8. Cleanup with 'npm run checkstyle'
8. Submit a PR

[wikipedia]: https://en.wikipedia.org/wiki/Reductio_ad_absurdum
