## Rules of Engagement

Before I introduce the steps to begin, let's set some ground rules. You can implement an operator for anything you'd like but there are a few constraints.

1. You must use reduce in your solution, no map/filter/foreach
2. Your solution must be functional, with no side-effects
3. Recursion will be allowed for nested data types
4. If recursion is used, it must be tail call optimized
5. Be mindful of performance
6. Use only vanilla JS, whatever features babel-preset-env supports

## Getting Started

This library is designed to make contributing as easy and simple as possible. All work is tracked in the Issues.

If you'd like to contribute:

- Request to claim an issue by commenting on it
- Suggest a new operator (ex array.map)
- Suggest a new operator type group (ex arrays)
- Suggest some other type of feature

Development is done following the [Feature Branch Workflow][feature-workflow]:

1. Fork the repo
2. Clone your fork
3. Create a *feature branch* named after your operator
4. Run `npm run start`, so webpack can watch for changes
5. Implement your operator
6. Add a test(s) to verify its functionality
7. Add supporting documentation
8. Lint the new code 'npm run lint'
9. Commit the changes
10. Push the commit to your fork
11. Create a merge request with `closes #[number]`* in the body on the main fork

* Replace [number] with the issue number you're working on