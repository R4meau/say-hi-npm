# say-hi-npm

A demo NPM package to test automated releases and CI

Here's what's happening here:

- It's a TS function that returns "hi".
- It also has a unit test to make sure it's indeed saying "hi"
- The `auto-publish` action runs on every push to `main` and whenever you run it manually in the GitHub interface.
  - It only builds and deploy when it detects version changes from the package.json file.
  - After building, it publishes to NPM and creates a new GitHub release using the build artifacts
- The `ci` action runs on every pull request to make sure tests are indeed passing
