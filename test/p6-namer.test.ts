import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';

import { P6Namer } from '../src';

test('P6Namer components', () => {
  // GIVEN
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'MyStack');

  // WHEN
  new P6Namer(stack, 'p6-namer');

  // THEN
  expectCDK(stack).to(
    haveResource('AWS::Lambda::Function'),
  );
});

