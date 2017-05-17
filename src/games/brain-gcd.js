import startGame from '../';

import * as brain from '../shared/brain-games-common';

export default () => {
  const greetLine = 'Find the greatest common divisor of given numbers.';
  const generator = () => {
    const number1 = brain.getRandomInt(1, 50);
    const number2 = brain.getRandomInt(1, 50);
    const divisor = brain.gcd(number1, number2);
    return brain.pair(`${number1} ${number2} ${divisor}`, String(divisor));
  };
  startGame(greetLine, generator);
};
