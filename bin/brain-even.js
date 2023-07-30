#!/usr/bin/env node
import { playGame } from '../src/index.js';
import brainEven from '../src/games/brain-even.js';
import greetUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
playGame(brainEven, name);
