import readlineSync from 'readline-sync';

const out = (line) => { console.log(line); };

export default () => {
  out('Welcome to the Brain Games!\n');
  const commoname = readlineSync.question('May I have your name? ');
  out(`Hello, ${commoname}!`);
};

// export default greetings
