console.log("loading game");
let jankenpo = ['Scissors', 'Paper', 'Rock'] 
let playerScore = 0;
let computerScore = 0;
let round = 0;
let userInput = "done";
let winLose = "First to 5! Let's have a good match!";
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

const wlose = document.createElement('div');
  wlose.textContent = winLose;
  container.appendChild(wlose);
const compSel = document.createElement('div');
  compSel.style.color = 'red' ;
  container.appendChild(compSel);
const yScore = document.createElement('div');
  yScore.style.color = 'blue' ;
  container.appendChild(yScore);
const comScore = document.createElement('div');
  comScore.style.color = 'red' ;
  container.appendChild(comScore);
const resText = document.createElement('div');
  resText.style.color = 'green' ;
  container.appendChild(resText);



function game() {
  winLose = "First to 5! Let's have a good match!";
  wlose.textContent = winLose;
  let playerSelection = userInput.toLowerCase();
  let computerSelection = computerPlay();
  let resultText = playRound(playerSelection,computerSelection);
  console.log("Computer Selection: " + computerSelection);
    compSel.textContent = "Computer Selection: " + computerSelection;
    yScore.textContent = "Your Score: " + playerScore;
  console.log("Your Score: " + playerScore);
   comScore.textContent = "Computer Score: " + computerScore;
  console.log("Computer Score: " + computerScore);
  resText.textContent = resultText;
  console.log(resultText);

  if (!(playerScore>=5|| computerScore>=5)) {
    start();
  } 
  else {
    if (playerScore>computerScore) {
      playerScore = 0;
      computerScore = 0;
      round = 0;
      winLose = "You Won! Congratulations! Let's play again sometime!";
      console.log (winLose);
      wlose.textContent = winLose;
      }
    
    else if (playerScore<computerScore) {
      playerScore = 0;
      computerScore = 0;
      round = 0;
      winLose = "You Lost! Challenge me to a rematch anytime!";
      console.log(winLose);
      wlose.textContent = winLose;
    
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
