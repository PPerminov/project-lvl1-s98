import * as lib from './shared/lib';

export default (game) => {
  const line1 = 'Welcome to the Brain Games!';
  lib.out(line1);
  switch (game) {
    case 'evenodd':
      const line2 = 'Answer "yes" if number even otherwise answer "no".\n';
      lib.out(line2);
      break;
    default:
      break;
  }
  const commoname = lib.input('May I have your name? ');
  lib.out(`Hello, ${commoname}!\n`);
  return commoname;
};
