import startGame from '../';

import * as brain from '../shared/brain-games-common';

export default () => {
  const greetLine = 'What number is missing in this progression?';
  const generator = () => {
    const mutator = brain.getRandomInt(11, 100);
    const progressionArray = [brain.getRandomInt(11, 100)];
    const progressionLength = 10;
    const positionToFind = brain.getRandomInt(0, 10);
    while (progressionArray.length < progressionLength) {
      progressionArray[progressionArray.length] =
        progressionArray[progressionArray.length - 1] + mutator;
    }
    const rightAnswer = progressionArray[positionToFind];
    progressionArray[positionToFind] = '..';
    return brain.pair(`${progressionArray.join(' ')} Answer: ${rightAnswer}`, `${rightAnswer}`);
  };
  startGame(greetLine, generator);
};
