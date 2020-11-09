# Contributing to p6-namer

- [Contributing to p6-namer](#contributing-to-p6-namer)
  - [Getting Started](#getting-started)
    - [Gitpod](#gitpod)
    - [Local](#local)
  - [Pull Requests](#pull-requests)
    - [Step 1: Open Issue](#step-1-open-issue)
    - [Step 3: Work your Magic](#step-3-work-your-magic)
    - [Step 4: Commit](#step-4-commit)
    - [Step 5: Pull Request](#step-5-pull-request)
    - [Step 6: Merge](#step-6-merge)

## Getting Started

### Gitpod

For setting up a local development environment,
we recommend using [Gitpod](http://gitpod.io) -
a service that allows you to spin up an in-browser
Visual Studio Code-compatible editor,
with everything set up and ready to go for CDK development.
Just click the button below to create your private workspace:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/p6m7g8/p6-namer)

This will start a new Gitpod workspace,
and immediately kick off a build of the CDK code.
Once it's done (it takes around an hour, unfortunately),
you can work on any package that you want to modify,
as described in ['Quick Iteration'](#quick-iteration) below.

Gitpod is free for 50 hours per month -
make sure to stop your workspace when you're done
(you can always resume it later, and it won't need to run the build again).

### Local

The basic commands to get the repository cloned and built locally follow:

```console
$ git clone https://github.com/p6m7g8/p6-namer.git
$ cd p6-namer
$ yarn
$ yarn build
```

## Pull Requests

### Step 1: Open Issue

If there isn't one already, open an issue describing what you intend to contribute. It's useful to communicate in
advance, because sometimes, someone is already working in this space, so maybe it's worth collaborating with them
instead of duplicating the efforts.

### Step 3: Work your Magic

Work your magic.

### Step 4: Commit

Create a commit with the proposed changes:

* Commit title and message (and PR title and description) must adhere to [conventionalcommits](https://www.conventionalcommits.org).
  * The title must begin with `feat(module): title`, `fix(module): title`, `refactor(module): title` or
    `chore(module): title`.
  * Title should be lowercase.
  * No period at the end of the title.

* Commit message should indicate which issues are fixed: `fixes #<issue>` or `closes #<issue>`.

### Step 5: Pull Request

* Submit a Pull Request on GitHub. A reviewer will later be assigned by the maintainers.

### Step 6: Merge

* Once approved and tested, a maintainer will squash-merge to master and will use your PR title/description as the
  commit message.

