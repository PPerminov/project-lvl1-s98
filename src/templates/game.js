import startGame from '../';

import * as brain from '../shared/brain-games-common';

export default () => {
  const greetLine = 'this is template greet line';
  const generator = () => {
    brain.out('this is template');
  };
  startGame(greetLine, generator);
};
