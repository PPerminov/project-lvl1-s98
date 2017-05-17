import startGame from '../';

import * as brain from '../shared/brain-games-common';

export default () => {
  const greetLine = 'What is the result of the expression?';
  const generator = () => {
    const number1 = brain.getRandomInt(1, 10);
    const number2 = brain.getRandomInt(1, 10);
    const expression = brain.getRandomInt(1, 4);
    if (expression === 1) {
      return brain.pair(`${number1} + ${number2} ?`, String(number1 + number2));
    } else if (expression === 2) {
      return brain.pair(`${number1} - ${number2} ?`, String(number1 - number2));
    }
    return brain.pair(`${number1} * ${number2} ?`, String(number1 * number2));
  };
  startGame(greetLine, generator);
};
