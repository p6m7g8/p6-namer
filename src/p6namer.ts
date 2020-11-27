import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambdajs from '@aws-cdk/aws-lambda-nodejs';
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

    const onEvent = new lambdajs.NodejsFunction(this, 'p6namer', {
      externalModules: [
        'aws-sdk',
      ],
      runtime: lambda.Runtime.NODEJS_12_X,
      timeout: cdk.Duration.seconds(2),
      tracing: lambda.Tracing.ACTIVE,
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
