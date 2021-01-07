import createGame, { getRandomNumber } from '../src/index.js';

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const number = getRandomNumber();
  return ({
    question: number,
    correctResult: isEven(number) ? 'yes' : 'no',
  });
};
export default createGame(evenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
