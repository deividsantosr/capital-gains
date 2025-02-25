#!/usr/bin/env node

import * as readline from 'readline';
import { CapitalGainsService } from './services/CapitalGainsService';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputMessage = 'Please enter your transactions in JSON format. Press Ctrl+D to finish.';

console.log(inputMessage);

rl.on('line', (line) => {
  try {
    let inputJSON = line.trim();

    if (!inputJSON) {
      console.error('Error: The previous input is empty or invalid!');
      return;
    }

    const calculator = new CapitalGainsService(inputJSON);
    calculator.process();
  }
  catch (err) {
    console.error('Error processing JSON input:', err);
  }
});

rl.on('close', () => {
  console.log("Program terminated.");
});