#!/usr/bin/env node
import { playGame } from '../src/index.js';
import brainGsd from '../src/games/brain-gcd.js';
import greetUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greetUser();
console.log('Find the greatest common divisor of given numbers.');
playGame(brainGsd, name);
