## Ground Rules

1. You must use reduce in your solution, (ie no map/filter/foreach)
2. Your solution must be functional (ie no side-effects)
3. Recursion is be allowed for nested data types
4. Be mindful of performance/memory
5. VanillaJS only
6. Forget DRY (Don't Repeat Yourself), keep modules self-contained

## Getting Started

This package is designed to make contributing as easy as possible. All work is tracked in the Issues.

If you'd like to contribute **claim an existing issue** -or- **create a new issue**. All unassigned issues are up-for-grabs.

Development follows the [Feature Branch Workflow][feature-workflow]:

1. Fork the repo
2. Clone your fork
3. Create a `feat/[name]` branch
4. Implement your feature
5. Commit the changes
6. Add tests (verify w/ `npm run test`)
7. Check styling (verify w/ `npm run lint`)
8. Add JSDoc documentation w/ typings (verify w/ `npm run types`)
9. Create a PR to merge the feature branch
10. Reference the issue in the PR

## Developing

The easiest path to implement new operators is via TDD (Test Driven Development) using the VSCode debugger.

1. Create a class for the operator (`[operator].js`)
2. Create a test for the operator (`[operator].spec.js`)
3. Write a test proof and implement it in the class
4. Make sure the test file has focus in VSCode
5. In the 'Debug' pane select the 'Test' configuration

The 'Test' configuration runs on the currently open file.  


[feature-workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
