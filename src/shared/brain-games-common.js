import readlineSync from 'readline-sync';

export const out = (line) => {
  console.log(line);
};

export const input = text => readlineSync.question(text);

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const pair = (car, cdr) => {
  const returnFunction = (operation) => {
    if (operation === 'car') {
      return car;
    }
    return cdr;
  };
  return returnFunction;
};

export const car = paired => paired('car');

export const cdr = paired => paired('cdr');

export const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};
