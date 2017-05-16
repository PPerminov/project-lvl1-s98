import readlineSync from 'readline-sync';

export const out = (line) => {
  console.log(line);
};

export const input = text => readlineSync.question(text);

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const odd = num => num % 2 === 0;

export const checkAnswerYes = (answer) => {
  if (answer === 'yes') {
    return true;
  } else if (answer === 'no') {
    return false;
  }
  return undefined;
};
