import main from '../';

import * as brain from '../shared/brainfunctions';

export default () => {
  const greetLine = 'What is the result of the expression?';
  const generator = () => {
    const num1 = brain.getRandomInt(1, 10);
    const num2 = brain.getRandomInt(1, 10);
    const expr = brain.getRandomInt(1, 4);
    if (expr === 1) {
      return brain.pair(`${num1} + ${num2} ?`, String(num1 + num2));
    } else if (expr === 2) {
      return brain.pair(`${num1} - ${num2} ?`, String(num1 - num2));
    }
    return brain.pair(`${num1} * ${num2} ?`, String(num1 * num2));
  };
  main(greetLine, generator);
};
