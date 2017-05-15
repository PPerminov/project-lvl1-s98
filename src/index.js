import readlineSync from 'readline-sync';

const out = (line) => {
  console.log(line);
};

export const greetings = (type = 'welcome') => {
  out('Welcome to the Brain Games!\n');
  if (type === 'greetings') {
    const commoname = readlineSync.question('May I have your name? ');
    out(`Hello, ${commoname}!`);
  }
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - (min + 1))) + min;


export const gameEven = (cycles) => {

};
// export default greetings
