import startGame from '../';

import * as brain from '../shared/brain-games-common';

export default () => {
  const greetLine = 'Answer "yes" if number even otherwise answer "no".';
  const generator = () => {
    const number = brain.getRandomInt(1, 50);
    if (number % 2 === 0) {
      return brain.pair(number, 'yes');
    }
    return brain.pair(number, 'no');
  };
  startGame(greetLine, generator);
};
