import * as fs from 'fs';
import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambdajs from '@aws-cdk/aws-lambda-nodejs';
import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as floyd from 'cdk-iam-floyd';

export interface IP6NamerProps {
  accountAlias: string;
}

export class P6Namer extends cdk.Resource {
  constructor(scope: cdk.Construct, id: string, props: IP6NamerProps) {
    super(scope, id);

    const policy = new floyd.Iam()
      .allow()
      .toCreateAccountAlias();

    // XXX: https://github.com/aws/aws-cdk/pull/11729
    const entry = fs.existsSync(path.join(__dirname, 'p6namer.p6namer.ts'))
      ? path.join(__dirname, 'p6namer.p6namer.ts') // local development
      : path.join(__dirname, 'p6namer.p6namer.js'); // when published in npm

    const onEvent = new lambdajs.NodejsFunction(this, 'p6namer', {
      entry,
      runtime: lambda.Runtime.NODEJS_12_X,
      timeout: cdk.Duration.seconds(2),
      tracing: lambda.Tracing.ACTIVE,
      bundling: {
        minify: true,
        externalModules: [
          'aws-sdk',
        ],
      },
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
