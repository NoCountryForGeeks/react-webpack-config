#!/usr/bin/env node

const program = require('commander');
const cp = require('child_process');

const relativeScriptsPath = '../scripts';

program
  .command('start')
  .description('Start development enviroment webpack-dev-server ')
  .action(() => cp.spawn(
      'node',
      [ require.resolve(`${relativeScriptsPath}/start`) ],
      { stdio: 'inherit' }
    )
  );

program
  .command('build')
  .description('Build production bundle')
  .action(() => cp.spawn(
      'node',
      [ require.resolve(`${relativeScriptsPath}/build`) ],
      { stdio: 'inherit' }
    )
  );

program.parse(process.argv);
