import { getRandomNumber } from '../index.js';

export default function brainPrime() {
  const isPrime = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  const randomNumber = getRandomNumber(2, 100);
  const questionText = randomNumber;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return {
    questionText,
    correctAnswer,
  };
}
