const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: 'pgollucci@p6m7g8.com',
  authorName: 'Philip M. Gollucci',
  cdkVersion: '1.101.0',
  name: 'p6-namer',
  repository: 'https://github.com/p6m7g8/p6-namer.git',
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
  defaultReleaseBranch: 'main',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  gitpod: true,
  devenv: true,

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

project.github.mergify.addRule({
  name: 'Label core contributions',
  actions: {
    label: {
      add: ['contribution/core'],
    },
  },
  conditions: [
    'author~=^(pgollucci)$',
    'label!=contribution/core',
  ],
});

project.github.mergify.addRule({
  name: 'Label auto-merge for core',
  actions: {
    label: {
      add: ['auto-merge'],
    },
  },
  conditions: [
    'label=contribution/core',
    'label!=auto-merge',
  ],
});

project.github.mergify.addRule({
  name: 'Label auto-merge snyk-bot',
  actions: {
    merge: {
      method: 'squash',
      commit_message: 'title+body',
      strict: 'smart',
      strict_method: 'merge',
    },
  },
  conditions: [
    'author=snyk-bot',
    'status-success=build',
  ],
});

project.gitpod.addTasks({
  name: 'Setup',
  init: 'yarn install',
  command: 'npx projen build',
});

project.synth();
