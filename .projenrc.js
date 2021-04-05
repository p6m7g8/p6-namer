const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: 'pgollucci@p6m7g8.com',
  authorName: 'Philip M. Gollucci',
  cdkVersion: '1.96.0',
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

  defaultReleaseBranch: 'master',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-lambda-nodejs',
  ],

  devDeps: [
    '@types/aws-lambda',
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

  gitpod: true,
  docgen: true,
  codeCov: true,

  python: {
    distName: 'p6-namer',
    module: 'p6_namer',
  },

  publishToMaven: {
    javaPackage: 'com.github.p6m7g8.p6namer',
    mavenGroupId: 'com.github.p6m7g8',
    mavenArtifactId: 'p6-namer',
  },

  dotnet: {
    dotNetNamespace: 'P6m7g8.P6Namer',
    packageId: 'P6m7g8.P6Namer',
  },

  /* AwsCdkConstructLibraryOptions */
  // cdkAssert: true,                                                          /* Install the @aws-cdk/assert library? */
  // cdkDependencies: undefined,                                               /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,                                           /* AWS CDK modules required for testing. */

  /* ConstructLibraryOptions */
  // catalog: undefined,                                                       /* Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:. */

  /* JsiiProjectOptions */
  // authorOrganization: undefined,                                            /* undefined */
  // compat: false,                                                            /* Automatically run API compatibility test against the latest version published to npm after compilation. */
  // compatIgnore: ".compatignore",                                            /* Name of the ignore file for API compatibility tests. */
  // description: undefined,                                                   /* Library description. */
  // docgen: true,                                                             /* Automatically generate API.md from jsii. */
  // dotnet: undefined,                                                        /* undefined */
  // eslint: true,                                                             /* Install eslint. */
  // java: undefined,                                                          /* undefined */
  // jest: true,                                                               /* Use jest for unit tests. */
  // jestOptions: undefined,                                                   /* Jest options. */
  // license: undefined,                                                       /* undefined */
  // python: undefined,                                                        /* undefined */
  // rootdir: ".",                                                             /* undefined */
  // stability: undefined,                                                     /* undefined */

  /* NodeProjectCommonOptions */
  // allowLibraryDependencies: true,                                           /* Allow the project to include `peerDependencies` and `bundledDependencies`. */
  // antitamper: true,                                                         /* Checks that after build there are no modified files on git. */
  // autoDetectBin: true,                                                      /* Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. */
  // bin: undefined,                                                           /* Binary programs vended with your module. */
  // buildWorkflow: true,                                                      /* Define a GitHub workflow for building PRs. */
  // bundledDeps: undefined,                                                   /* List of dependencies to bundle into this module. */
  // codeCov: false,                                                           /* Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret. */
  // codeCovTokenSecret: undefined,                                            /* Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. */
  // copyrightOwner: undefined,                                                /* License copyright owner. */
  // copyrightPeriod: undefined,                                               /* The copyright years to put in the LICENSE file. */
  // defaultReleaseBranch: "master",                                           /* The name of the main release branch. */
  // dependabot: true,                                                         /* Include dependabot configuration. */
  // dependabotOptions: undefined,                                             /* Options for dependabot. */
  // deps: [],                                                                 /* Runtime dependencies of this module. */
  // devDeps: [],                                                              /* Build dependencies for this module. */
  // entrypoint: "lib/index.js",                                               /* Module entrypoint (`main` in `package.json`). */
  // keywords: undefined,                                                      /* Keywords to include in `package.json`. */
  // libdir: "lib",                                                            /* Compiler artifacts output directory. */
  // maxNodeVersion: undefined,                                                /* Minimum node.js version to require via `engines` (inclusive). */
  // mergify: true,                                                            /* Adds mergify configuration. */
  // mergifyAutoMergeLabel: "auto-merge",                                      /* Automatically merge PRs that build successfully and have this label. */
  // mergifyOptions: undefined,                                                /* Options for mergify. */
  // minNodeVersion: undefined,                                                /* Minimum Node.js version to require via package.json `engines` (inclusive). */
  // npmDistTag: "latest",                                                     /* The dist-tag to use when releasing to npm. */
  // npmignore: undefined,                                                     /* Additional entries to .npmignore. */
  // npmignoreEnabled: true,                                                   /* Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. */
  // npmRegistry: "registry.npmjs.org",                                        /* The registry url to use when releasing packages. */
  // packageManager: NodePackageManager.YARN,                                  /* The Node Package Manager used to execute scripts. */
  // peerDependencyOptions: undefined,                                         /* Options for `peerDeps`. */
  // peerDeps: [],                                                             /* Peer dependencies for this module. */
  // projenDevDependency: true,                                                /* Indicates of "projen" should be installed as a devDependency. */
  // projenUpgradeAutoMerge: undefined,                                        /* Automatically merge projen upgrade PRs when build passes. */
  // projenUpgradeSchedule: [ "0 6 * * *" ],                                   /* Customize the projenUpgrade schedule in cron expression. */
  // projenUpgradeSecret: undefined,                                           /* Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`). */
  // projenVersion: Semver.latest(),                                           /* Version of projen to install. */
  // pullRequestTemplate: true,                                                /* Include a GitHub pull request template. */
  // pullRequestTemplateContents: undefined,                                   /* The contents of the pull request template. */
  // releaseBranches: [ "master" ],                                            /* Branches which trigger a release. */
  // releaseEveryCommit: true,                                                 /* Automatically release new versions every commit to one of branches in `releaseBranches`. */
  // releaseSchedule: undefined,                                               /* CRON schedule to trigger new releases. */
  // releaseToNpm: false,                                                      /* Automatically release to npm when new versions are introduced. */
  // releaseWorkflow: true,                                                    /* Define a GitHub workflow for releasing from "master" when new versions are bumped. */
  // scripts: {},                                                              /* npm scripts to include. */
  // srcdir: "src",                                                            /* Typescript sources directory. */
  // start: true,                                                              /* Defines a `yarn start` interactive experience. */
  // startOptions: undefined,                                                  /* Options for `yarn start`. */
  // testdir: "test",                                                          /* Tests directory. */
  // workflowBootstrapSteps: "yarn install --frozen-lockfile && yarn projen",  /* Workflow steps to use in order to bootstrap this repo. */
  // workflowContainerImage: undefined,                                        /* Container image to use for GitHub workflows. */
  // workflowNodeVersion: undefined,                                           /* The node version to use in GitHub workflows. */
});

project.gitignore.exclude('.node-version');

project.github.addMergifyRules({
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

project.github.addMergifyRules({
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

project.gitpod.addTasks({
  name: 'Setup',
  init: 'yarn install',
  command: 'npx projen build',
});

project.synth();
