const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: "pgollucci@p6m7g8.com",
  authorName: "Philip M. Gollucci",
  cdkVersion: "1.60.0",
  name: "p6-namer",
  repository: "https://github.com/p6m7g8/p6-namer.git"
});

project.synth();
