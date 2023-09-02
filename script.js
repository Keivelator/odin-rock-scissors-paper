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

function playRound (playerChoice) {
   
   playerSelection = playerChoice;
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

function displayCurrentResult (resultText) {
   const result = document.querySelector('.result');
   result.textContent = resultText;
}

function displayCurrentScore () {
   const currentScore = document.querySelector('.current-score');
   currentScore.textContent = `player score is ${playerScore}, computer score is ${computerScore}`;
}

function gameResult () {
   const resultScreen = document.querySelector('.game-result');
   if (playerScore > computerScore) {
      resultScreen.textContent = `Congrats! You won the game!`;
   } else if (playerScore < computerScore) {
      resultScreen.textContent = `You lost the game.`;
   } else {
      resultScreen.textContent = `Something's wrong with the code.`;
   }

   playerScore = 0;
   computerScore = 0;
}

let playerSelection = ' ';
let computerSelection = ' ';
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
   button.addEventListener('click', () => {
      const resultText = playRound(button.id);
      displayCurrentResult(resultText);
      displayCurrentScore();
      if (playerScore === 5 || computerScore === 5) gameResult();
   });
})