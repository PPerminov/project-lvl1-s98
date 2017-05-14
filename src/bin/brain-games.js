#!/usr/bin/env node
import readlineSync from 'readline-sync';

const out = (line) => console.log(line);

out('Welcome to the Brain Games!')
const commoname = readlineSync.question('May I have your name, please? ');
out('Welcome sir '+commoname+'!!!!!!1')
