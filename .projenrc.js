const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: "pgollucci@p6m7g8.com",
  authorName: "Philip M. Gollucci",
  cdkVersion: "1.68.0",
  name: "p6-namer",
  repository: "https://github.com/p6m7g8/p6-namer.git",

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-python'
  ],
});

project.synth();
