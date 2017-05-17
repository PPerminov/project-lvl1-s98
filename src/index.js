import * as brain from './shared/brainfunctions';

export const basegreet = () => {
  brain.out('Welcome to the Brain Games!\n');
  const name = brain.input('May I have your name? ');
  brain.out(`Hello, ${name}!\n`);
};

export default (greetLine, generator) => {
  let level = 0;
  let gameData;
  let question;
  let answer;
  let rightanswer;
  brain.out(`Welcome to the Brain Games!\n${greetLine}\n`);
  const name = brain.input('May I have your name? ');
  brain.out(`Hello, ${name}!\n`);
  while (level < 3) {
    gameData = generator();
    question = brain.car(gameData);
    rightanswer = brain.cdr(gameData);
    brain.out(`Question: ${question}`);
    answer = brain.input('Your answer: ').toLowerCase();
    if (answer === rightanswer) {
      brain.out('Correct!');
    } else {
      brain.out(`'${answer}' is wrong answer ;(. Correct answer was '${rightanswer}'\nLet's try again, ${name}!`);
      return;
    }
    level += 1;
  }
  brain.out(`Congratulations, ${name}!`);
};
