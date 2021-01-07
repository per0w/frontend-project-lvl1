import createGame, { getRandomNumber } from '../src/index.js';

const getOperation = (number, numberTwo) => {
  const operators = ['+', '-', '*'];

  const index = getRandomNumber(0, 2);
  const operator = operators[index];

  let result;

  switch (operator) {
    case '+': result = number + numberTwo; break;
    case '-': result = number - numberTwo; break;
    case '*': result = number * numberTwo; break;
    default: break;
  }

  return {
    result,
    operation: `${number} ${operator} ${numberTwo}`,
  };
};

const calcGame = () => {
  const numberOne = getRandomNumber(1, 10);
  const numberTwo = getRandomNumber(1, 10);
  const { result, operation } = getOperation(numberOne, numberTwo);

  return ({
    question: operation,
    correctResult: result,
  });
};

export default createGame(calcGame, 'What is the result of the expression?');
