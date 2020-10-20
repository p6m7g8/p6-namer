"""AWS Custom Resource Lambda to set the IAM Account Alias
"""
import logging
import boto3
import crhelper

log = logging.getLogger()
log.setLevel(logging.INFO)
log.info(
    'Logging setup complete - set to log level %s',
    log.getEffectiveLevel()
)

iam = boto3.client('iam')
helper = crhelper.CfnResource()


@helper.create
@helper.update
def iam_account_alias_create(event, context):
    """Set the IAM Account Alias"""
    alias = event['ResourceProperties']['AccountAlias']

    iam.create_account_alias(
        AccountAlias=alias
    )

    helper.Data['Alias'] = alias


@helper.delete
def iam_account_alias_delete(event, context):
    """Delete the IAM Account Alias"""

    iam.delete_account_alias()


def handler(event, context):
    """Lambda Entry Point"""
    helper(event, context)
