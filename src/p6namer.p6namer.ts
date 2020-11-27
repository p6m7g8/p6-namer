import { Handler, Context, Callback } from 'aws-lambda';
import * as AWS from 'aws-sdk';

const iam: AWS.IAM = new AWS.IAM();

/**
 *
 */
function p6_namer_iam_account_alias(alias: string): void {

  const params: AWS.IAM.CreateAccountAliasRequest = {
    AccountAlias: alias,
  };

  iam.createAccountAlias(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log(data);
    }
  });
}

/**
 *
 * @param event
 * @param _context
 * @param _callback
 */
const handler: Handler = (event: any, _context: Context, _callback: Callback) => {
  console.log({ event });

  p6_namer_iam_account_alias(event.ResourceProperties.accountAlias);
};

export { handler };