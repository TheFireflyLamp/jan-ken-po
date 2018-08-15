console.log("loading game");
let jankenpo = ['Scissors', 'Paper', 'Rock'] 
let playerScore = 0;
let computerScore = 0;
let round = 0;
let userInput = "done";
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
const container = document.querySelector('#status');


function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
  }
function input(e) {
    userInput = e.target.id;
    console.log(userInput);
    e.target.classList.add('playing');
    game();
  }
function start() {window.addEventListener('click', input);}   

start();

function game() {
  let playerSelection = userInput.toLowerCase();
  let computerSelection = computerPlay();
  let resultText = playRound(playerSelection,computerSelection);
  console.log("Computer Selection: " + computerSelection);
  const compSel = document.createElement('div');
    compSel.style.color = 'red' ;
    compSel.textContent = "Computer Selection: " + computerSelection;
  container.appendChild(compSel);
  const yScore = document.createElement('div');
    yScore.style.color = 'red' ;
    yScore.textContent = "Your Score: " + playerScore;
  container.appendChild(yScore);
  console.log("Your Score: " + playerScore);
  const comScore = document.createElement('div');
    comScore.style.color = 'red' ;
    comScore.textContent = "Computer Score: " + computerScore;
  container.appendChild(comScore);
  console.log("Computer Score: " + computerScore);
  const resText = document.createElement('div');
    resText.style.color = 'red' ;
    resText.textContent = resultText;
  container.appendChild(resText);
  console.log(resultText);

  if (!(playerScore>=5|| computerScore>=5)) {
    start();
  } 
  else {
    if (playerScore>computerScore) {
      console.log ("You won!");
      if (confirm("Do you want to play again?")) {
      playerScore=0;
      computerScore=0;
      round=0;
      start();
      }
      else {
      playerScore=0;
      computerScore=0;
      console.log("Thank you for playing!");
      }
    }
    else if (playerScore<computerScore) {
      console.log("You Lost!");
      if (confirm("Do you want to play again?")) {
        playerScore=0;
        computerScore=0;
        round=0;
        start();
      }
      else {
        playerScore=0;
        computerScore=0;
        console.log("Thank you for playing!");
      }
    }
  }
  function computerPlay() {
    return "Rock";
    let random = jankenpo[Math.floor(Math.random()*jankenpo.length)];
    return random;
  }
  function playRound(playerSelection, computerSelection) {
    if (playerSelection=='done') {
      playerScore= 5;
      computerScore= 5;
      text= "See You Next Time!";
      return text;
    }
    else if (playerSelection=='pochi') {
      playerScore=5;
      text= "You Win Forever! Who's a good doggo?";
      return text;
    }
    else {
      if (computerSelection=='Scissors'){
        switch(playerSelection) {
          case 'scissors':
            text = "It's a draw!";
            break;
          case 'paper':
            text = "You lose! Scissors beats Paper!";
            computerScore= computerScore+1;
            round = round+1;
            break;
          case 'rock':
            text = "You win! Rock beats Scissors";
            playerScore = playerScore+1;
            round = round+1;
            break;
          default:
            text = "Please Enter Your Selection (Paper, Scissors or Rock)";
        }
      }
      else if (computerSelection=='Paper'){
        switch(playerSelection) {
          case 'scissors':
            text = "You win! Scissors beats Paper";
            playerScore = playerScore+1;
            round = round+1;
            break;
          case 'paper':
            text = "It's a draw!";
            break;
          case 'rock':
            text = "You lose! Paper beats Rock!";
            computerScore= computerScore+1;
            round = round+1;
            break;
          default:
            text = "Please Enter Your Selection (Paper, Scissors or Rock)";
        }
      }
      else {
        switch(playerSelection) {
          case 'scissors':
            text = "You lose! Rock beats Scissors";
            computerScore= computerScore+1;
            round = round+1;
            break;
          case 'paper':
            text = "You win! Paper beats Rock!";
            playerScore = playerScore+1;
            round = round+1;
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
}
