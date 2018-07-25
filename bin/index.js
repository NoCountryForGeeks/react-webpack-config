#!/usr/bin/env node

const program = require('commander');
const cp = require('child_process');

program
  .command('start')
  .description('Start development enviroment webpack-dev-server ')
  .action(() => cp.spawn(
      'node',
      [ require.resolve('../scripts/start') ],
      { stdio: 'inherit' }
    )
  );

program.parse(process.argv);
