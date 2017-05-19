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

export const getMeanAndLengthFromNumber = (number) => {
  const Mean = (numberForMean, unit = 0, accum = 0) => {
    if (typeof numberForMean[unit] === 'undefined') {
      const resultPair = pair(accum / unit, unit);
      return resultPair;
    }
    return Mean(numberForMean, unit + 1, accum + Number(numberForMean[unit]));
  };

  return Mean(String(number));
};

export const isPrime = (numberToCheck, divisor = 3) => {
  if (numberToCheck / 3 <= divisor) {
    return true;
  }
  if (numberToCheck % divisor === 0) {
    return false;
  }
  return isPrime(numberToCheck, (divisor + 1));
};
