# say-hi-npm

A demo NPM package to test automated releases and CI. I created it for an article I wrote on the subject.

Here's what's happening here:

- It's a TypeScript function that returns "hi".
- It also has a unit test to make sure it's indeed saying "hi"
- The `cd-pipeline` action runs on every push to `main` and whenever you run it manually in the GitHub interface.
- The `ci-pipeline` action runs on every pull request against the `main` branch to make sure tests are indeed passing

## The CI Pipeline

[Click here](https://github.com/R4meau/say-hi-npm/blob/main/.github/workflows/ci-pipeline.yml) to check out the configuration for this pipeline.

This pipeline takes care of automating code testing and linting.

[Click here]() to see an example of a failing job.

[Click here]() to see a successful job.

## The CD Pipeline

[Click here](https://github.com/R4meau/say-hi-npm/blob/main/.github/workflows/cd-pipeline.yml) to check out the configuration for this pipeline.

Here's how this pipeline functions:

- When I push to the main branch, if there's a version bump, it tags the software with the new version and builds it
- When I push to the prod branch or when I run it manually through the GitHub interface, if the version has been updated, it tags the software as latest and builds it
- On a successful build, it also packages an artifact for the GitHub Release
- Upon successful checking and building, if it's a versioned release, it creates a new GitHub Release. If it's a latest release, it publishes the built program to npm
