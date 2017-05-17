import * as brain from './shared/brain-games-common';

export const basegreet = () => {
  brain.out('Welcome to the Brain Games!\n');
  const name = brain.input('May I have your name? ');
  brain.out(`Hello, ${name}!\n`);
};

export default (greetLine, generator) => {
  let level = 0;
  brain.out(`Welcome to the Brain Games!\n${greetLine}\n`);
  const name = brain.input('May I have your name? ');
  brain.out(`Hello, ${name}!\n`);
  while (level < 3) {
    const gameData = generator();
    brain.out(`Question: ${brain.car(gameData)}`);
    const answer = brain.input('Your answer: ').toLowerCase();
    if (answer === brain.cdr(gameData)) {
      brain.out('Correct!');
    } else {
      brain.out(`'${answer}' is wrong answer ;(. Correct answer was '${brain.cdr(gameData)}'\nLet's try again, ${name}!`);
      return;
    }
    level += 1;
  }
  brain.out(`Congratulations, ${name}!`);
};
