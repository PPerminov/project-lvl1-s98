import main from '../';

import * as brain from '../shared/brainfunctions';

export default () => {
  const greetLine = 'Answer "yes" if number even otherwise answer "no".';
  const generator = () => {
    const FunctionResult = brain.getRandomInt(1, 50);
    if (FunctionResult % 2 === 0) {
      return brain.pair(FunctionResult, 'yes');
    }
    return brain.pair(FunctionResult, 'no');
  };
  main(greetLine, generator);
};
