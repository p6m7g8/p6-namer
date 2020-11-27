const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: "pgollucci@p6m7g8.com",
  authorName: "Philip M. Gollucci",
  cdkVersion: "1.75.0",
  name: "p6-namer",
  repository: "https://github.com/p6m7g8/p6-namer.git",

  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-python'
  ],
  codeCov: true,

  python: {
    distName: 'p6-namer',
    module: 'p6_namer',
  },
/*
  java: {
     javaPackage: 'com.github.p6m7g8.p6namer',
     mavenGroupId: 'com.github.p6m7g8',
     mavenArtifactId: 'p6-namer',
  },
*/
  dotnet: {
    dotNetNamespace: 'P6m7g8.P6Namer',
    packageId: 'P6m7g8.P6Namer',
  },
});

project.github.addMergifyRules({
  name: 'Label core contributions',
  actions: {
    label: {
      add: ['contribution/core']
    }
  },
  conditions: [
    'author~=^(pgollucci)$',
    'label!=contribution/core'
  ],
});

project.github.addMergifyRules({
  name: 'Label auto-merge for core',
  actions: {
    label: {
      add: ['auto-merge']
    }
  },
  conditions: [
    'label=contribution/core',
    'label!=auto-merge'
  ],
});

project.synth();
