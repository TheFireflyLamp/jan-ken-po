console.log("loading game");
let jankenpo = ['Scissors', 'Paper', 'Rock']
let computerSelection; 
let resultText;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let thanksText;
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
const compSel = document.querySelector('#compSel');
const myScore = document.querySelector('#myScore');
const compScore = document.querySelector('#compScore');
const result = document.querySelector('#result');
const thanks = document.querySelector('#thanks');


function removeTransition(e) {
  if (e.propertyName != 'transform') return;
  this.classList.remove('playing');
}

function input(e) {
  userInput = e.target.id;
  console.log(userInput);
  e.target.classList.add('playing');
  game(userInput);
}

document.querySelectorAll('.key').forEach(node => node.onclick = input);

function updateViews() {
  compSel.textContent = "Computer Selection: " + computerSelection;
  myScore.textContent = "Your Score: " + playerScore;
  compScore.textContent = "Computer Score: " + computerScore;
  result.textContent = resultText;
  thanks.textContent = thanksText;
}

function promptReset() {
  if (confirm("Do you want to play again?")) {
    computerSelection = "";
    playerScore = 0;
    computerScore = 0;
    round = 0;
    resultText = "";
    thanksText = "";
  }
  else {
    document.querySelectorAll('.key').forEach(node => node.onclick = null);
    thanksText = "Thank you for playing!"
  }
  updateViews();
}

function endGame() {
  if (playerScore > computerScore) {
    thanksText = "You Won!"
    console.log("You won!");
  }
  else {
    thanksText = "You Lost!"
    console.log("You Lost!");
  }
  updateViews();
  window.setTimeout(promptReset, 400);
}

function game(userInput) {
  playerSelection = userInput.toLowerCase();
  computerSelection = computerPlay();
  resultText = playRound(playerSelection,computerSelection);
  console.log("Computer Selection: " + computerSelection);
  updateViews();
  console.log(resultText);

  if (round === 5) {
    endGame();
  }
}

function computerPlay() {
  return "Rock";
  let random = jankenpo[Math.floor(Math.random() * jankenpo.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'done') {
    playerScore = 5;
    computerScore = 5;
    text = "See You Next Time!";
    return text;
  }
  else if (playerSelection == 'pochi') {
    playerScore = 5;
    text = "You Win Forever! Who's a good doggo?";
    return text;
  }
  else {
    if (computerSelection == 'Scissors') {
      switch (playerSelection) {
        case 'scissors':
          text = "It's a draw!";
          break;
        case 'paper':
          text = "You lose! Scissors beats Paper!";
          computerScore = computerScore + 1;
          round = round + 1;
          break;
        case 'rock':
          text = "You win! Rock beats Scissors";
          playerScore = playerScore + 1;
          round = round + 1;
          break;
        default:
          text = "Please Enter Your Selection (Paper, Scissors or Rock)";
      }
    }
    else if (computerSelection == 'Paper') {
      switch (playerSelection) {
        case 'scissors':
          text = "You win! Scissors beats Paper";
          playerScore = playerScore + 1;
          round = round + 1;
          break;
        case 'paper':
          text = "It's a draw!";
          break;
        case 'rock':
          text = "You lose! Paper beats Rock!";
          computerScore = computerScore + 1;
          round = round + 1;
          break;
        default:
          text = "Please Enter Your Selection (Paper, Scissors or Rock)";
      }
    }
    else {
      switch (playerSelection) {
        case 'scissors':
          text = "You lose! Rock beats Scissors";
          computerScore = computerScore + 1;
          round = round + 1;
          break;
        case 'paper':
          text = "You win! Paper beats Rock!";
          playerScore = playerScore + 1;
          round = round + 1;
          break;
        case 'rock':
          text = "It's a draw!";
          break;
        default:
          text = "Please Enter Your Selection (Paper, Scissors or Rock)";
      }
    }
  }
  return text;
}
