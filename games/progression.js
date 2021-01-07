import createGame, { getRandomNumber } from '../src/index.js';

const generateProgression = () => {
  const numberOfProgression = getRandomNumber(10, 50);

  const stepOfProgression = getRandomNumber(1, 5);

  const progression = [];

  for (let i = 1; progression.length < numberOfProgression; i += stepOfProgression) {
    progression.push(i);
  }

  return progression;
};

const progressionGame = () => {
  const result = generateProgression();

  const indexForHide = getRandomNumber(1, result.length - 1);

  const hideNumber = result[indexForHide];

  result[indexForHide] = '..';

  return ({
    question: result.join(' '),
    correctResult: hideNumber,
  });
};

export default createGame(progressionGame, 'What number is missing in the progression?');
