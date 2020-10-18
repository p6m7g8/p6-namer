"""AWS Custom Resource Lambda set the IAM Account Alias

T-Rex SMILE™
"""
import logging
import boto3

log = logging.getLogger()
log.setLevel(logging.INFO)
log.info(
    'Logging setup complete - set to log level %s',
    log.getEffectiveLevel()
)

iam = boto3.client('iam')


def iam_account_alias_create(event):
    """Set the IAM Account Alias"""
    log.info(event)
    alias = event['AccountAlias']

    iam.create_account_alias(
        AccountAlias=alias
    )

    return True


def handler(event, context):
    """Lambda Entry Point"""
    return iam_account_alias_create(event)


def main():
    """Developer Entry Point."""
    logging.debug("handler()")
    handler({}, {})


if __name__ == "__main__":
    main()
