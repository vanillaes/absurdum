**Notice: This is a ES package, development requires a Node >=v13.2**

## Ground Rules

1. You must use reduce in your solution, (ie no map/filter/foreach)
2. Your solution must be functional (ie no side-effects)
3. Recursion is be allowed for nested data types
4. Be mindful of performance/memory
5. VanillaJS only

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
8. Add JSDoc comments and type check them (verify w/ `npm run types`)
9. Create a PR to merge the feature branch
10. Reference the issue in the PR

*Note: If linting (7) and/or adding typed JSDoc comments (8) feel daunting, don't hesitate to submit a PR without them.*

## Developing

The easiest path to implement new operators is via TDD (Test Driven Development).

1. Create a class for the operator (`[operator].js`)
2. Create a test for the operator (`[operator].spec.js`)
3. Write a test proof and implement it in the class
4. Run the test

### Testing

There are 3 different ways to run tests

#### VSCode Debugger [Best]

1. Open the `.spec` file in VSCode
2. Open the 'Debug' pane
3. Run the 'Test' configuration

#### Test Watcher [Easiest]

The watcher looks for changes in the `.spec` files. When a change is detected, the tests in that file are run.

1. Open a terminal an the project directory
2. Run `npm run test:watch`
3. Modify then save a `.spec` file

#### CLI [Simplest]

1. Open a terminal
2. Run `node [path]`

All `.spec` files can be run directly from the CLI.

[feature-workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
