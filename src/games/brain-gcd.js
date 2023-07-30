import { getRandomNumber } from '../index.js';

export default function brainGsd() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const questionText = `${num1} ${num2}`;

  let maxNumber = Math.max(num1, num2);
  let minNumber = Math.min(num1, num2);

  while (maxNumber % minNumber !== 0) {
    const remainder = maxNumber % minNumber;
    maxNumber = minNumber;
    minNumber = remainder;
  }

  const correctAnswer = String(minNumber);
  return { questionText, correctAnswer };
}
