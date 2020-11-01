# P6Namer
- [P6Namer](#p6namer)
  - [Summary](#summary)
    - [Payload](#payload)
  - [Author](#author)

## Badges

[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/p6m7g8/p6-namer)
![Build](https://github.com/p6m7g8/p6-namer/workflows/Build/badge.svg)

## Summary

Deploys a Lambda function with `iam:CreateAccountAlias` permissions.
This function is idempotent so can be re-run with the same input.

### Usage
```ts
...
new P6Namer.P6Namer(this, 'AccountAlias', {
  accountAlias: 'THE-ALIAS',
});
```
## Author

Change for Demo


Philip M. Gollucci <pgollucci@p6m7g8.com>
