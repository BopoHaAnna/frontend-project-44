// import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

export default function brainCalc() {
  const performOperation = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        throw new Error('Unknown operator');
    }
  };
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const questionText = `${num1} ${operator} ${num2}`; // формула для вопроса
  const correctAnswer = String(performOperation(num1, num2, operator));
  return { questionText, correctAnswer }; // 'число'
}
