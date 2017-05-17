import main from '../';

import * as lib from '../shared/commonfunctions';

export default () => {
  const greetLine = 'Find the greatest common divisor of given numbers.';
  const generator = () => {
    const gcd = (number1, number2) => {
      let deadPoint = 1;
      let divisor = Math.min(number1, number2) + 1;
      while (deadPoint !== 0) {
        divisor -= 1;
        deadPoint = (number1 % divisor) + (number2 % divisor);
      }
      return lib.pair(`${number1} ${number1}`, String(divisor));
    };
    return gcd(lib.getRandomInt(1, 50), lib.getRandomInt(1, 50));
  };
  main(greetLine, generator);
};
