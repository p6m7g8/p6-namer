import * as path from 'path';

import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import { PythonFunction } from '@aws-cdk/aws-lambda-python';
import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';

export interface P6NamerProps extends cdk.ResourceProps {
  accountAlias: string;
}

export class P6Namer extends cdk.Resource {
  constructor(scope: cdk.Construct, id: string, props: P6NamerProps) {
    super(scope, id, props);

    const policy = new iam.PolicyStatement({
      actions: ['iam:CreateAccountAlias'],
      resources: ['*'],
      effect: iam.Effect.ALLOW,
    });

    const onEvent = new PythonFunction(this, 'P6Namer/Lambda', {
      runtime: lambda.Runtime.PYTHON_3_8,
      timeout: cdk.Duration.seconds(30),
      tracing: lambda.Tracing.ACTIVE,
      entry: path.join(__dirname, '../../p6-namer/resources/lambda'),
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
