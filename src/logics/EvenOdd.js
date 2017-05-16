import greetings from '..';

import * as lib from '../shared/lib';

export default (cycles = 3) => {
  const game = 'evenodd';
  const name = greetings(game);
  let level = 1;
  let num = 0;
  let answer = '';
  while (level <= cycles) {
    num = lib.getRandomInt(1, 50);
    lib.out(`Question: ${num}`);
    answer = lib.input('').toLowerCase();
    if (lib.checkAnswer(answer) === lib.odd(num)) {
      lib.out('Correct!\n');
    } else {
      switch (answer) {
        case 'yes':
          lib.out(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
          return;
        case 'no':
          lib.out(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
          return;
        default:
          lib.out(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
          return;

      }
    }
    level += 1;
  }
  lib.out(`Congratulations, ${name}!`);
};
