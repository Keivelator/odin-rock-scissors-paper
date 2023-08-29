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

function playRound (playerSelection, computerSelection) {
   if (playerSelection === 'rock') {
      if (computerSelection === 'rock') {
         return `Rock with rock. It's a tie!`;
      } else if (computerSelection === 'scissors') {
         return `Rock beats scissors. You win!`;
      } else if (computerSelection === 'paper') {
         return `Paper beats rock. You lose`;
      } else {
         return `Something's wrong with the code`
      }
   } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
         return `Rock beats scissors. You lose!`;
      } else if (computerSelection === 'scissors') {
         return `Scissors with scissors. It's a tie!`;
      } else if (computerSelection === 'paper') {
         return `Scissors beats paper. You win!`;
      } else {
         return `Something's wrong with the code`
      }
   } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
         return `Paper beats rock. You win!`;
      } else if (computerSelection === 'scissors') {
         return `Scissors beats paper. You lose`;
      } else if (computerSelection === 'paper') {
         return `Paper with paper. It's a tie!`;
      } else {
         return `Something's wrong with the code`
      }
   } else {
      return `Something's wrong with the code`
   }
}

let playerSelection = 'Scissors'.toLowerCase();
let computerSelection = getComputerChoice();

let gameResult = playRound(playerSelection, computerSelection);

console.log(`player used ${playerSelection} and computer used ${computerSelection}`);
console.log(gameResult);