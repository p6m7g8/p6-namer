import * as path from 'path';

import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';

export class P6Namer extends cdk.Resource {
  constructor(scope: cdk.Construct, id: string, props: cdk.ResourceProps = {}) {
    super(scope, id, props);

    const policy = new iam.PolicyStatement({
      actions: ['iam:CreateAccountAlias'],
      resources: ['*'],
      effect: iam.Effect.ALLOW,
    });

    const fn = new lambda.Function(this, 'P6Namer', {
      runtime: lambda.Runtime.PYTHON_3_8,
      handler: 'index.handler',
      timeout: cdk.Duration.seconds(30),
      tracing: lambda.Tracing.ACTIVE,
      code: lambda.Code.fromAsset(
        path.join(__dirname, '../resources/lambda'),
      ),
    });

    fn.addToRolePolicy(policy);
  }
}
