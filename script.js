function getComputerChoice () {
   let randomNumber = Math.floor(Math.random() *  3);
   if (randomNumber === 0) {
    return 'rock';
   } else if (randomNumber === 1) {
    return 'scissors';
   } else if (randomNumber === 2) {
    return 'paper';
   } else {
    return `there's something wrong with the equation`;
   }
}

console.log(getComputerChoice());