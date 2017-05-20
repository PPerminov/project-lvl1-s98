import startGame from '../';

import * as brain from '../shared/brain-games-common';

export default () => {
  const greetLine = 'Balance the given number.';
  const generator = () => {
    const number = brain.getRandomInt(1000, 10000);
    const balancer = (numbers) => {
      const newArray = numbers.sort();
      const min = newArray[0];
      const max = newArray[newArray.length - 1];
      if (max - min > 1) {
        const arithmeticMean = (min + max) / 2;
        newArray[0] = Math.floor(arithmeticMean);
        newArray[newArray.length - 1] = Math.ceil(arithmeticMean);
        return balancer(newArray);
      }
      return newArray.join('');
    };
    const balancedNumber = balancer(brain.numberToArray(number));
    return brain.pair(`${number}        Answer is: ${balancedNumber}`, balancedNumber);
  };
  startGame(greetLine, generator);
};
