import createGame, { getRandomNumber } from '../src/index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const primeGame = () => {
  const number = getRandomNumber(1, 10);
  return ({
    question: number,
    correctResult: isPrime(number) ? 'yes' : 'no',
  });
};

export default createGame(primeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');
