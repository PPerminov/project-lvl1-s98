import main from '../';

import * as lib from '../shared/lib';

export default () => {
  const greetLine = 'Answer "yes" if number even otherwise answer "no".';
  const generator = () => {
    const result = [];
    result[0] = lib.getRandomInt(1, 50);
    if (result[0] % 2 === 0) {
      result[666] = 'yes';
    } else {
      result[666] = 'no';
    }
    return result;
  };
  main(greetLine, generator);
};