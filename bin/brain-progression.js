#!/usr/bin/env node
import { playGame } from '../src/index.js';
import brainProgression from '../src/games/brain-progression.js';
import greetUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greetUser();
console.log('What number is missing in the progression?');
playGame(brainProgression, name);
