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

export const isPrime = (numberToCheck, divisor = 2) => {
  if (numberToCheck / 3 <= divisor) {
    return true;
  }
  if (numberToCheck % divisor === 0) {
    return false;
  }
  return isPrime(numberToCheck, (divisor + 1));
};

export const toInt = string => Number(string);

export const numberToArray = number => (String(number)).split('').map(toInt);
