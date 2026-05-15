let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

let result = '';

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    result = `It's a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
  console.log('------------------------');
}

const controls = document.getElementById('controls');
const display = document.getElementById('results');

controls.addEventListener('click', (e) => {
  const humanChoice = e.target.id;
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  display.innerHTML = `
      ${result} <br>
      Human Score: ${humanScore} <br>
      Computer Score: ${computerScore} <br>
  `;

  if (humanScore === 5) {
    display.textContent = `You win!`;
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    display.textContent = `You lose, Computer Wins!`;
    humanScore = 0;
    computerScore = 0;
  }
});
