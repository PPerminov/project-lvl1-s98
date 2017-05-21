import startGame from '../';

import * as brain from '../shared/brain-games-common';

export default () => {
  const greetLine = 'What number is missing in this progression?';
  const generator = () => {
    const mutator = brain.getRandomInt(11, 100);
    const progressionLength = 10;
    const positionToFind = brain.getRandomInt(0, 10);
    const buildProgression = (currentNumber, currentPosition, progression = '', rightAnswer = '') => {
      if (currentPosition === progressionLength) {
        return brain.pair(progression, rightAnswer);
      }
      const current = currentNumber + mutator;
      if (currentPosition === positionToFind) {
        return buildProgression(current, (currentPosition + 1), `${progression} ..`, current);
      }
      return buildProgression(current, (currentPosition + 1), `${progression} ${current}`, rightAnswer);
    };
    const progressionPair = buildProgression(brain.getRandomInt(11, 100), 0);
    const rightAnswer = brain.cdr(progressionPair);
    const progression = brain.car(progressionPair);
    return brain.pair(`${progression} Answer: ${rightAnswer}`, `${rightAnswer}`);
  };
  startGame(greetLine, generator);
};
