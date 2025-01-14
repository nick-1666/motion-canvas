# Contributing to Motion Canvas

This is an initial version of the Contribution Guide. Feel free to discuss it
and suggest any changes on [our discord server][discord].

## Code of Conduct

Before contributing to the project, please read our
[Code of Conduct](./CODE_OF_CONDUCT.md).

## Reporting a bug

Before you submit an issue, please search [the issue tracker][issues]. An issue
for your problem might already exist and the discussion might inform you of
workarounds readily available.

You can file new issues by [selecting an issue template][new-issue] and filling
out the necessary information.

## Proposing a Change

If you intend to change the public API, make any non-trivial changes to the
implementation, or create brand-new guides in the documentation, make sure to
[create an issue][new-feature] first. This will let us discuss a proposal before
you put significant effort into it. After a proposal has been discussed it may
receive the [`c-accepted`][label-accepted] label indicating that it's ready to
be implemented.

If you're only fixing a bug or a typo, it's fine to submit a pull request right
away without creating an issue, but make sure it contains a clear and concise
description of the bug.

## Working on Issues

Before you start working on an issue make sure that it has been accepted
(indicated by a [`c-accepted`][label-accepted] label) and that no one has
claimed it yet. Otherwise, you may duplicate other people's efforts. If somebody
claims an issue but doesn't follow up for more than two weeks, it’s fine to take
it over, but you should still leave a comment. You should also leave a comment
on any issue you're working on, to let others know.

## Semantic Versioning

Motion Canvas follows [semantic versioning][semver].

## Making a Pull Request

1. Fork the motion-canvas/motion-canvas repo.
2. In your forked repo, create a new branch for your changes:
   ```shell
   git checkout -b my-fix-branch master
   ```
3. Update the code.
4. Commit your changes using a **descriptive commit message** that follows the
   [Angular Commit Message Conventions][commit-format].
   ```shell
   git commit --all
   ```
   When committing the changes, our git hooks should automatically run Prettier
   and ESLint for you. If, for some reason, hooks are not supported in your
   working environement, you can run these tools using `npm run prettier:fix`
   and `npm run eslint:fix` respectively.
5. Push your branch to GitHub:
   ```shell
   git push origin my-fix-branch
   ```
6. In GitHub, send a pull request to [the main branch][main] and **request a
   review** from [aarthificial](https://github.com/aarthificial).

### Going through verification

After you made a pull request, a GitHub workflow will be dispatched to verify
it. There are a few checks that can fail:

- `Commit message` - The commit message doesn't follow the [Angular Commit
  Message Conventions][commit-format]. You can ignore this check since
  maintainers can modify your commit message before merging, but make sure to
  follow the conventions in the future.
- `Lint` - ESLint has failed. Run `npm run eslint` locally to list the problems.
- `Tests` - Unit tests have failed. Run `npm run core:test` to check which tests
  fail and why.
- `Build` - The build process have failed. There are three possible points of
  failure you need to check:
  - `run: npx lerna run build` - Building all packages.
  - `run: npm run examples:build` - Building the examples.
  - `run: npm run e2e:test` - Running the end-to-end tests.

### Addressing review feedback

1. Make required updates to the code.
2. Create a fixup commit and push it to your GitHub repo:
   ```shell
   git commit --all --fixup HEAD
   git push
   ```

## Attribution

This Contribution Guide was partially inspired by [React][react] and
[Angular][angular].

[semver]: https://semver.org/
[discord]: https://discord.gg/XnnWTrHYAW
[semantic-release]:
  https://semantic-release.gitbook.io/semantic-release/support/faq#can-i-set-the-initial-release-version-of-my-package-to-0.0.1
[main]: https://github.com/motion-canvas/motion-canvas/tree/main
[issues]: https://github.com/motion-canvas/motion-canvas/issues
[new-issue]: https://github.com/motion-canvas/motion-canvas/issues/new/choose
[new-feature]:
  https://github.com/motion-canvas/motion-canvas/issues/new?template=feature_request.md
[commit-format]:
  https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit
[angular]: https://github.com/angular/angular/blob/main/CONTRIBUTING.md
[react]: https://reactjs.org/docs/how-to-contribute.html
[label-accepted]:
  https://github.com/motion-canvas/motion-canvas/labels/c-accepted
