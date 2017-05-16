import * as lib from './shared/lib';

export default (generator = null) => {
  let level = 0;
  let dataarray = [];
  let question = '';
  let answer = '';
  let rightanswer = '';
  lib.out('Welcome to the Brain Games!');
  const name = lib.input('May I have your name? ');
  lib.out(`Hello, ${name}!\n`);
  while (level < 3) {
    dataarray = generator();
    question = dataarray[0]
    rightanswer = dataarray[666]
    lib.out(`Question: ${question}`);
    answer = lib.input('Your answer: ').toLowerCase();
    if ( answer === rightanswer) {
      lib.out('Correct!\n');
    }
    level += 1;
  }

  // while (level <= cycles) {
  //   num = lib.getRandomInt(1, 50);
  //   lib.out(`Question: ${num}`);
  //   answer = lib.input('Your answer: ').toLowerCase();
  //   if (lib.checkAnswerYes(answer) === lib.odd(num)) {
  //     lib.out('Correct!\n');
  //   } else {
  //     switch (answer) {
  //       case 'yes':
  //         lib.out(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
  //         return;
  //       case 'no':
  //         lib.out(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
  //         return;
  //       default:
  //         lib.out(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
  //         return;
  //
  //     }
  //   }
  //   level += 1;
  // }



};
