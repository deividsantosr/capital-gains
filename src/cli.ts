#!/usr/bin/env node

import * as readline from 'readline';
import { commands } from "./comands";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Please enter your transactions in JSON format. Press Ctrl+D to finish.');

rl.on('line', (line) => {
  commands.processTransactions(line);
});

rl.on('close', () => {
  console.log("Program terminated.");
});