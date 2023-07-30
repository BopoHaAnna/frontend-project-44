import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const checkUserAnswer = (correctAnswer, userAnswer) => {
  // Проверка ответа пользователя и вывод сообщения о результате
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

export const playGame = (gameFunction, name) => {
  const maxRounds = 3;
  let correctCount = 0;

  for (let i = 0; i < maxRounds; i += 1) {
    const { questionText, correctAnswer } = gameFunction();
    console.log(`Question: ${questionText}`); // Выводим текст вопроса
    const userAnswer = readlineSync.question('Your answer: '); // Получаем ответ пользователя
    const isWin = checkUserAnswer(correctAnswer, userAnswer); // Проверяем ответ пользователя
    if (isWin) {
      correctCount += 1; // Увеличиваем счетчик правильных ответов
    } else {
      break; // Прерываем цикл, если пользователь дал неправильный ответ
    }
  }

  if (correctCount === maxRounds) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
