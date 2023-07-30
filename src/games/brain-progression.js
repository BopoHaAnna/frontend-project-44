import { getRandomNumber } from '../index.js';

export default function brainProgression() {
  const start = getRandomNumber(1, 100); // начальное число
  const arr = [start];
  const step = getRandomNumber(1, 100); // на что увеличиваем
  const randomLength = getRandomNumber(5, 10);
  for (let i = 0; i < randomLength; i += 1) {
    arr.push(arr[i] + step);
  }
  const randomIndex = getRandomNumber(0, arr.length - 1);
  const correctAnswer = String(arr[randomIndex]);
  const newValue = '..';
  arr[randomIndex] = newValue;
  const questionText = arr.join(' ');
  return {
    questionText,
    correctAnswer,
  };
}
