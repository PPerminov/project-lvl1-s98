import readlineSync from 'readline-sync'

const out = (line) => console.log(line)

export const greetings = () => {
  out('Welcome to the Brain Games!\n')
  var commoname = readlineSync.question('May I have your name? ')
  out(`Hello, ${commoname}!`)
}

// export default greetings
