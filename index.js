#!/usr/bin/env node
import path from "node:path";
import minimist from "minimist";
import { Plop, run } from "plop";

const args = process.argv.slice(2);
const argv = minimist(args);

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
if (argv['h'] || argv['help']) {
  console.log(`
Usage:
  $ yield                 Select from a list of available generators
  $ yield <name>          Run a generator registered under that name
  $ yield <name> [input]  Run the generator with input data to bypass prompts

Options:
  -h, --help             Show this help display
  -v, --version          Print current version
  `);
  process.exit(0);
}

Plop.prepare({
  cwd: argv.cwd,
  configPath: path.join(__dirname, 'plopfile.js'),
  preload: argv.preload || [],
  completion: argv.completion
}, env => Plop.execute(env, run));
