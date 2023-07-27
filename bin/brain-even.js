#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const isEven = (number) => number % 2 === 0;
const playBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const maxRounds = 3;
  let correctCount = 0; // Переменная для подсчета правильных ответов
  for (let i = 0; i < maxRounds; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100); // рандомное число
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'; // правильный ответ
    console.log(`Question: ${randomNumber}`); // задаем вопрос
    const userAnswer = readlineSync.question('Your answer: '); // ответ пользователя
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      correctCount += 1; // Увеличиваем счетчик правильных ответов
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      break; // Прерываем цикл при неверном ответе
    }
  }

  if (correctCount === maxRounds) {
    console.log(`Congratulations, ${name}!`);
  }
};
playBrainEven();
