#!/usr/bin/env node
import { playGame } from '../src/index.js';
import brainCalc from '../src/games/brain-calc.js';
import greetUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greetUser();
console.log('What is the result of the expression?');
playGame(brainCalc, name);
