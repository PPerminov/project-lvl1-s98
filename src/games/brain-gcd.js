import main from '../';

import * as lib from '../shared/brainfunctions';

export default () => {
  const greetLine = 'Find the greatest common divisor of given numbers.';
  const generator = () => {
    const gcd = (number1, number2) => {
      let stopPointer = 1;
      let divisor = Math.min(number1, number2);
      while (stopPointer > 0) {
        divisor -= 1;
        stopPointer = (number1 % divisor) + (number2 % divisor);
      }
      return lib.pair(`${number1} ${number2} ${divisor}`, String(divisor));
    };
    return gcd(lib.getRandomInt(1, 50), lib.getRandomInt(1, 50));
  };
  main(greetLine, generator);
};
/* ON the next line - another kind of function. It isn't used but I'm not sure about it */
export const gcdAnotherOneFunction = () => {
  const greetLine = 'Find the greatest common divisor of given numbers.';
  const generator = () => {
    const gcd = (number1, number2) => {
      if (number2 === 0) {
        return number1;
      }
      return gcd(number2, number1 % number2);
    };
    const number1 = lib.getRandomInt(1, 50);
    const number2 = lib.getRandomInt(1, 50);
    const divisor = gcd(number1, number2);
    return lib.pair(`${number1} ${number2} ${divisor}`, String(divisor));
    // return gcd(lib.getRandomInt(1, 50), lib.getRandomInt(1, 50));
  };
  main(greetLine, generator);
};
