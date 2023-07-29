import { getRandomNumber } from '../index.js';

export default function brainEven() {
  const isEven = (number) => number % 2 === 0;
  const randomNumber = getRandomNumber(1, 100); // рандомное число от 0 до 100
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'; // правильный ответ
  console.log(`Question: ${randomNumber}`); // задаем вопрос
  return correctAnswer; // возвращаем совпадают ответы или нет
}
