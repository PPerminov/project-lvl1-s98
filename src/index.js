import * as lib from './shared/commonfunctions';

export const basegreet = () => {
  lib.out('Welcome to the Brain Games!\n');
  const name = lib.input('May I have your name? ');
  lib.out(`Hello, ${name}!\n`);
};

export default (greetLine, generator) => {
  let level = 0;
  let gameData;
  let question;
  let answer;
  let rightanswer;
  lib.out(`Welcome to the Brain Games!\n${greetLine}\n`);
  const name = lib.input('May I have your name? ');
  lib.out(`Hello, ${name}!\n`);
  while (level < 3) {
    gameData = generator();
    question = lib.car(gameData);
    rightanswer = lib.cdr(gameData);
    lib.out(`Question: ${question}`);
    answer = lib.input('Your answer: ').toLowerCase();
    if (answer === rightanswer) {
      lib.out('Correct!');
    } else {
      lib.out(`'${answer}' is wrong answer ;(. Correct answer was '${rightanswer}'\nLet's try again, ${name}!`);
      return;
    }
    level += 1;
  }
  lib.out(`Congratulations, ${name}!`);
};
