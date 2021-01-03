import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const numberOfQuestion = [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ];

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < numberOfQuestion.length; i += 1) {
    console.log(`Question: ${numberOfQuestion[i]}`);
    readlineSync.question('Your answer: ');

    if (numberOfQuestion[i] % 2 === 0) {
      console.log('Correct!');
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};
