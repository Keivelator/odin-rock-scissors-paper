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

function getPlayerChoice (playerChoice) {
   playerSelection = playerChoice;
}

function playRound (playerChoice) {
   
   getPlayerChoice(playerChoice);
   computerSelection = getComputerChoice();

   if (playerSelection === 'rock') {
      if (computerSelection === 'rock') {
         return `Rock with rock. It's a tie!`;
      } else if (computerSelection === 'scissors') {
         playerScore++;
         return `Rock beats scissors. You win!`;
      } else if (computerSelection === 'paper') {
         computerScore++;
         return `Paper beats rock. You lose`;
      } else {
         return `Something's wrong with the code`
      }
   } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
         computerScore++;
         return `Rock beats scissors. You lose!`;
      } else if (computerSelection === 'scissors') {
         return `Scissors with scissors. It's a tie!`;
      } else if (computerSelection === 'paper') {
         playerScore++;
         return `Scissors beats paper. You win!`;
      } else {
         return `Something's wrong with the code`
      }
   } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
         playerScore++;
         return `Paper beats rock. You win!`;
      } else if (computerSelection === 'scissors') {
         computerScore++;
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

// function game () {
//    for (i = 0; i < 5; i++) {
//       console.log(playRound());
//    }
// }

function gameResult () {
   console.log('Computer scored ' + computerScore);
   console.log('Player scored ' + playerScore);
   if (playerScore > computerScore) {
      console.log(`Congrats! You won the game!`);
   } else if (playerScore < computerScore) {
      console.log(`You lost the game.`);
   } else if (playerScore === computerScore) {
      console.log('Tie.');
   } else {
      console.log(`Something's wrong with the code.`)
   }
}

let playerSelection = ' ';
let computerSelection = ' ';
let playerScore = 0;
let computerScore = 0;

// game();
// console.log(playRound());
// gameResult();

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
   button.addEventListener('click', () => {
      console.log(playRound(button.id));
   });
})