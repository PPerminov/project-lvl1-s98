import readlineSync from 'readline-sync';

// const out = (line) => console.log(line);

const greeting = () => {
  console.log('Welcome to the Brain Games!')
  const commoname = readlineSync.question('May I have your name, please? ');
  console.log('Welcome sir !!!!!!1')
}
