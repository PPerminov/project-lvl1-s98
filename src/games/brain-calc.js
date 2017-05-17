import main from '../';

import * as lib from '../shared/lib';

export default () => {
  const greetLine = 'What is the result of the expression?';
  const generator = () => {
    const result = [];
    const num1 = lib.getRandomInt(1, 10);
    const num2 = lib.getRandomInt(1, 10);
    const expr = lib.getRandomInt(1, 4);
    let condition;
    let mathResult;
    if (expr === 1) {
      condition = `${num1} + ${num2} ?`;
      mathResult = num1 + num2;
    } else if (expr === 2) {
      condition = `${num1} - ${num2} ?`;
      mathResult = num1 - num2;
    } else {
      condition = `${num1} * ${num2} ?`;
      mathResult = num1 * num2;
    }
    result[0] = condition;
    result[666] = String(mathResult);
    return result;
  };
  main(greetLine, generator);
};
