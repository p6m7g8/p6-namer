AWS CDK setups up a Custom Resource via Cloud Formation which sets
the AWS IAM Account Alias

# P6Namer
- [P6Namer](#p6namer)
  - [Badges](#badges)
  - [Distributions](#distributions)
  - [Summary](#summary)
  - [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [Changes](#changes)
    - [Usage](#usage)
  - [Author](#author)
## Badges

[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/p6m7g8/p6-namer)
![Build](https://github.com/p6m7g8/p6-namer/workflows/Build/badge.svg)
![Release](https://github.com/p6m7g8/p6-namer/workflows/Release/badge.svg)
[![Mergify](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/p6m7g8/p6-namer/&style=flat)](https://mergify.io)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=p6m7g8_p6-namer&metric=alert_status)](https://sonarcloud.io/dashboard?id=p6m7g8_p6-namer)
[![Known Vulnerabilities](https://snyk.io/test/github/p6m7g8/p6-namer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/p6m7g8/p6-namer?targetFile=package.json)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/p6m7g8/p6-namer)](https://github.com/p6m7g8/p6-namer/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/p6m7g8/p6-namer)](https://github.com/p6m7g8/p6-namer/network/dependents?dependent_type=PACKAGE)

## Distributions
[![npm version](https://badge.fury.io/js/p6-namer.svg)](https://badge.fury.io/js/p6-namer)
[![PyPI version](https://badge.fury.io/py/p6-namer.svg)](https://badge.fury.io/py/p6-namer)
[![NuGet version](https://badge.fury.io/nu/P6m7g8.P6Namer.svg)](https://badge.fury.io/nu/P6m7g8.P6Namer)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/com.github.p6m7g8/p6-namer/badge.svg)](https://maven-badges.herokuapp.com/maven-central/com.github.p6m7g8/p6-namer)

## Summary

Deploys Custom Resource backed by a Lambda function with `iam:CreateAccountAlias` permissions.
This function is idempotent so can be re-run with the same input.

## Contributing

- [How to Contribute](CONTRIBUTING.md)

## Code of Conduct

- [Code of Conduct](CODE_OF_CONDUCT.md)

## Changes

- [Change Log](CHANGELOG.md)

### Usage
```ts
...

import { P6Namer } from 'p6-namer';

new P6Namer(this, 'AccountAlias', {
  accountAlias: 'THE-ALIAS',
});
```
## Author

Philip M. Gollucci <pgollucci@p6m7g8.com>
