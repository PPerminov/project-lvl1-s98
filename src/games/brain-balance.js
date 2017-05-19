import startGame from '../';

import * as brain from '../shared/brain-games-common';

export default () => {
  const greetLine = 'Balance the given number.';
  const generator = () => {
    const number = brain.getRandomInt(100, 10000);
    const meanPair = brain.getMeanAndLengthFromNumber(number);
    const mean = brain.car(meanPair);
    const numberLength = brain.cdr(meanPair);
    const difference = (mean - Math.floor(mean)) * numberLength;
    const buildBalancedNumber = (arithmeticMean, value, additional, balancedNumber = '') => {
      if (value === 0) {
        return balancedNumber;
      }
      if (additional > 0) {
        return buildBalancedNumber(arithmeticMean, value - 1,
          additional - 1, String(arithmeticMean + 1) + balancedNumber);
      }
      return buildBalancedNumber(arithmeticMean, value - 1,
        additional, String(arithmeticMean) + balancedNumber);
    };
    const balancedNumber = buildBalancedNumber(Math.floor(mean), numberLength, difference);
    return brain.pair(`${number}        Answer is: ${balancedNumber}`, balancedNumber);
  };
  startGame(greetLine, generator);
};
