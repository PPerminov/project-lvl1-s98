import startGame from '../';

import * as brain from '../shared/brain-games-common';

export default () => {
  const greetLine = 'Is number is prime?????? true or false';
  const generator = () => {
    const number = brain.getRandomInt(100, 1000);
    return brain.pair(number, String(brain.isSimple(number)));
  };
  startGame(greetLine, generator);
};
