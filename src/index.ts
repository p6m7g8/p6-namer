import * as path from 'path';

import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';

export interface IP6NamerProps {
  accountAlias: string;
}

export class P6Namer extends cdk.Resource {
  constructor(scope: cdk.Construct, id: string, props: IP6NamerProps) {
    super(scope, id);

    const policy = new iam.PolicyStatement({
      actions: ['iam:CreateAccountAlias'],
      resources: ['*'],
      effect: iam.Effect.ALLOW,
    });

    const onEvent = new lambda.Function(this, 'P6Namer/Lambda', {
      runtime: lambda.Runtime.PYTHON_3_8,
      timeout: cdk.Duration.seconds(30),
      tracing: lambda.Tracing.ACTIVE,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../resources/lambda')),
    });

    onEvent.addToRolePolicy(policy);

    const provider = new cr.Provider(this, 'P6Namer/Provider', {
      onEventHandler: onEvent,
    });

    new cdk.CustomResource(this, 'P6Namer/CR', {
      serviceToken: provider.serviceToken,
      properties: {
        AccountAlias: props.accountAlias,
      },
    });
  }
}
