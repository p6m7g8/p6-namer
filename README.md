AWS CDK setups up a Custom Resource via Cloud Formation which sets
the AWS IAM Account Alias

# P6Namer
- [P6Namer](#p6namer)
  - [Badges](#badges)
  - [Distributions](#distributions)
  - [Summary](#summary)
    - [Usage](#usage)
  - [Author](#author)

## Badges

[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/p6m7g8/p6-namer)
![Build](https://github.com/p6m7g8/p6-namer/workflows/Build/badge.svg)
![Release](https://github.com/p6m7g8/p6-namer/workflows/Release/badge.svg)

## Distributions
[![npm version](https://badge.fury.io/js/p6-namer.svg)](https://badge.fury.io/js/p6-namer)
[![PyPI version](https://badge.fury.io/py/p6-namer.svg)](https://badge.fury.io/py/p6-namer)
[![NuGet version](https://badge.fury.io/nu/P6m7g8.P6Namer.svg)](https://badge.fury.io/nu/P6m7g8.P6Namer)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/P6m7g8.P6Namer/P6Namer/badge.svg)](https://maven-badges.herokuapp.com/maven-central/P6m7g8.P6Namer/P6Namer)

## Summary

Deploys Custom Resource backed by a Lambda function with `iam:CreateAccountAlias` permissions.
This function is idempotent so can be re-run with the same input.

### Usage
```ts
...
new P6Namer.P6Namer(this, 'AccountAlias', {
  accountAlias: 'THE-ALIAS',
});
```
## Author

Philip M. Gollucci <pgollucci@p6m7g8.com>
