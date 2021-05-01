const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  author: 'Philip M. Gollucci',
  authorAddress: 'pgollucci@p6m7g8.com',
  cdkVersion: '1.101.0',
  defaultReleaseBranch: 'main',
  name: 'p6-namer',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/pgollucci/p6-namer.git',
  description: 'Sets the AWS IAM Account Alias with a Custom Resource',
  keywords: [
    'aws',
    'cdk',
    'iam',
    'account',
    'alias',
    'landing zone',
  ],

  minNodeVersion: '14.0.0',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  gitpod: true,

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-nodejs',
  ],

  devDeps: [
    '@types/aws-lambda',
    'typedoc@^0.20.35',
    'esbuild@^0',
  ],

  deps: [
    'aws-lambda',
    'aws-sdk',
    'cdk-iam-floyd',
  ],

  bundledDeps: [
    'aws-lambda',
    'aws-sdk',
    'cdk-iam-floyd',
  ],

  publishToPypi: {
    distName: 'p6-namer',
    module: 'p6_namer',
  },

  publishToMaven: {
    javaPackage: 'com.github.p6m7g8.p6namer',
    mavenGroupId: 'com.github.p6m7g8',
    mavenArtifactId: 'p6-namer',
  },

  publishToNuget: {
    dotNetNamespace: 'P6m7g8.P6Namer',
    packageId: 'P6m7g8.P6Namer',
  },
});

project.gitignore.exclude('.node-version');

project.synth();
