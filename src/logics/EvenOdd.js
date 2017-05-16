import greetings from '..';

import * as lib from '../shared/lib';

export default (cycles = 3) => {
  const game = 'evenodd';
  const name = greetings(game);
  let level = 1;
  let num = 0;
  let answer = '';

  lib.out(`Congratulations, ${name}!`);
};
