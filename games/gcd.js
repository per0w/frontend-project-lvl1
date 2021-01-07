import createGame, { getRandomNumber } from '../src/index.js';

const getGcd = (m, n) => (m !== 0 ? getGcd(n % m, m) : n);

const gcdGame = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const result = getGcd(numberOne, numberTwo);

  return ({
    question: `${numberOne} ${numberTwo}`,
    correctResult: result,
  });
};

export default createGame(gcdGame, 'Find the greatest common divisor of given numbers.');
