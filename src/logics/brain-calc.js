import greetings from '..';

import * as lib from '../shared/lib';

const getSymbol = (num) => {
  switch (num) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

const getResult = (num1, num2, expr) => {
  switch (expr) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

export default (cycles = 3) => {
  const game = 'calc';
  const name = greetings(game);
  let level = 1;
  let answer = '';
  let num1;
  let num2;
  let expr;
  let symbol;
  let result;
  while (level <= cycles) {
    level += 1;
    num1 = lib.getRandomInt(1, 50);
    num2 = lib.getRandomInt(1, 50);
    expr = lib.getRandomInt(1, 3);
    symbol = getSymbol(expr);
    result = getResult(num1, num2, expr);
    lib.out(`Question: ${num1} ${symbol} ${num2}`);
    answer = lib.input('Your answer: ').toLowerCase();
    if (Number(answer) === result) {
      lib.out('Correct!\n');
    } else {
      lib.out(`'${answer}' is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      return;
    }
  }
  lib.out(`Congratulations, ${name}!`);
};
