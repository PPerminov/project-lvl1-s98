import main from '../';

import * as lib from '../shared/commonfunctions';

export default () => {
  const greetLine = 'What is the result of the expression?';
  const generator = () => {
    const num1 = lib.getRandomInt(1, 10);
    const num2 = lib.getRandomInt(1, 10);
    const expr = lib.getRandomInt(1, 4);
    if (expr === 1) {
      return lib.pair(`${num1} + ${num2} ?`, String(num1 + num2));
    } else if (expr === 2) {
      return lib.pair(`${num1} - ${num2} ?`, String(num1 - num2));
    }
    return lib.pair(`${num1} * ${num2} ?`, String(num1 * num2));
  };
  main(greetLine, generator);
};
