import main from '../';

import * as lib from '../shared/commonfunctions';

export default () => {
  const greetLine = 'Answer "yes" if number even otherwise answer "no".';
  const generator = () => {
    const FunctionResult = lib.getRandomInt(1, 50);
    if (FunctionResult % 2 === 0) {
      return lib.pair(FunctionResult, 'yes');
    }
    return lib.pair(FunctionResult, 'no');
  };
  main(greetLine, generator);
};
