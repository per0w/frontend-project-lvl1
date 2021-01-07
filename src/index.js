import readlineSync from 'readline-sync';

export const getRandomNumber = (min = 1, max = 20) => Math.floor(Math.random()
 * (max - min + 1)) + min;

export default (game, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  console.log(description);

  return () => {
    for (let i = 0; i < 3; i += 1) {
      const {
        question,
        correctResult,
      } = game();

      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');

      const correctAnswer = String(correctResult);
      const isCorrectAnswer = correctAnswer === answer;

      if (isCorrectAnswer) {
        console.log('Correct!');
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log(`Let's try again, ${name}`);
        return;
      }
    }
    console.log(`Congratulations, ${name}`);
  };
};
