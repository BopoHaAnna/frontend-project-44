#!/usr/bin/env node
import { playGame } from '../src/index.js';
import brainPrime from '../src/games/brain-prime.js';
import greetUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greetUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
playGame(brainPrime, name);
