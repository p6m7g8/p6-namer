# P6Namer
- [P6Namer](#p6namer)
  - [Summary](#summary)
    - [Payload](#payload)
  - [Author](#author)

## Summary

Deploys a Lambda function with `iam:CreateAccountAlias` permissions.
This function is idempotent so can be re-run with the same input.

### Payload
```json
{
    'AccountAlias': 'theAlias'
}
```
## Author

Change for Demo


Philip M. Gollucci <pgollucci@p6m7g8.com>
