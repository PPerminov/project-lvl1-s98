import startGame from '../';

import * as brain from '../shared/brain-games-common';

export default () => {
  const greetLine = 'What number is missing in this progression?';
  const generator = () => {
    const mutator = brain.getRandomInt(11, 100);
    const progressionArray = [brain.getRandomInt(11, 100)];
    const positionToFind = brain.getRandomInt(0, 10);
    let progressionString = '';
    while (progressionArray.length < 10) {
      progressionArray[progressionArray.length] =
        progressionArray[progressionArray.length - 1] + mutator;
    }
    const rightAnswer = progressionArray[positionToFind];
    progressionArray[positionToFind] = '..';
    for (let i = 0; i < 10; i += 1) {
      if (i === 0) {
        progressionString = `${progressionArray[i]}`;
      } else {
        progressionString = `${progressionString} ${progressionArray[i]}`;
      }
    }

    return brain.pair(`${progressionString} Answer: ${rightAnswer}`, `${rightAnswer}`);
  };
  startGame(greetLine, generator);
};
