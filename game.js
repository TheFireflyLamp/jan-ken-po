console.log("loading game");
let jankenpo = ['Scissors', 'Paper', 'Rock'] 
let playerScore = 0;
let computerScore = 0;
let round = 0;
let userInput = "done";
let winLose = "First to 5! Let's have a good match!";
const keys = document.querySelectorAll('.key');

const wlose = document.querySelector('#wlose');
  wlose.textContent = winLose;
const compSel = document.querySelector('#compSel');
  compSel.style.color = 'maroon' ;
  compSel.textContent = '???';
const yourSel = document.querySelector('#yourSel');
  yourSel.style.color = 'darkblue' ;
  yourSel.textContent = '???';
const yScore = document.querySelector('#yScore');
  yScore.style.color = 'darkblue' ;
  yScore.textContent = 'Your Score: 0';
const comScore = document.querySelector('#comScore');
  comScore.style.color = 'maroon' ;
  comScore.textContent = 'Computer Score: 0';
const resText = document.querySelector('#resText');
  resText.style.color = 'green' ;
  resText.textContent = 'Let\'s go!';
const resBut = document.querySelector('#reset');
document.querySelectorAll('.reset').forEach(node => node.onclick = restart);

start();

function input(e) {
    userInput = e.target.id;
    console.log(userInput);
    game(userInput);
  }

function start() {document.querySelectorAll('.key').forEach(node => node.onclick = input); }  

function restart() {
  playerScore=0;
  computerScore=0;
  round= 0;
  wlose.textContent = winLose;
  compSel.textContent = '???';
  yourSel.textContent = '???';
  yScore.textContent = 'Your Score: 0';
  comScore.textContent = 'Computer Score: 0';
  resText.textContent = 'Let\'s go!';
  start();
  
}

function game(userInput) {
  winLose = "First to 5! Let's have a good match!";
  wlose.textContent = winLose;
  let playerSelection = userInput.toLowerCase();
  let computerSelection = computerPlay();
  let resultText = playRound(playerSelection,computerSelection);
  console.log("Computer Selection: " + computerSelection);
    
    yScore.textContent = "Your Score: " + playerScore;
  console.log ("Your Selection : " + userInput);

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
      winLose = "You Won! Congratulations! Here's your Mythical RPS Hero Badge!";
      console.log (winLose);
      wlose.textContent = winLose;
      document.querySelectorAll('.key').forEach(node => node.onclick = null);
      }
    
    else if (playerScore<computerScore) {
      winLose = "You Lost! Challenge me to a rematch anytime!";
      console.log(winLose);
      wlose.textContent = winLose;
      document.querySelectorAll('.key').forEach(node => node.onclick = null);
    }
     
  }
 
  
  function computerPlay() {
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
            compSel.textContent = "Computer Selection: " + computerSelection;
            text = "It's a draw!";
            yourSel.textContent = "Your Selection: Scissors";
            break;
          case 'paper':
            compSel.textContent = "Computer Selection: " + computerSelection;
            text = "You lose! Scissors beats Paper!";
            yourSel.textContent = "Your Selection: Paper";
            computerScore= computerScore+1;
            round = round+1;
            break;
          case 'rock':
            compSel.textContent = "Computer Selection: " + computerSelection;
            text = "You win! Rock beats Scissors";
            yourSel.textContent = "Your Selection: Rock";
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
            compSel.textContent = "Computer Selection: " + computerSelection;
            text = "You win! Scissors beats Paper";
            yourSel.textContent = "Your Selection: Scissors";
            playerScore = playerScore+1;
            round = round+1;
            break;
          case 'paper':
            compSel.textContent = "Computer Selection: " + computerSelection;
            text = "It's a draw!";
            yourSel.textContent = "Your Selection: Paper";
            break;
          case 'rock':
            compSel.textContent = "Computer Selection: " + computerSelection;
            text = "You lose! Paper beats Rock!";
            yourSel.textContent = "Your Selection: Rock";
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
            compSel.textContent = "Computer Selection: " + computerSelection;
            text = "You lose! Rock beats Scissors";
            yourSel.textContent = "Your Selection: Scissors";
            computerScore= computerScore+1;
            round = round+1;
            break;
          case 'paper':
            compSel.textContent = "Computer Selection: " + computerSelection;
            text = "You win! Paper beats Rock!";
            yourSel.textContent = "Your Selection: Paper";
            playerScore = playerScore+1;
            round = round+1;
            break;
          case 'rock':
            compSel.textContent = "Computer Selection: " + computerSelection;
            text = "It's a draw!";
            yourSel.textContent = "Your Selection: Rock";
            break;
          default:
            text = "Please Enter Your Selection (Paper, Scissors or Rock)";
        }
      }
    }
  return text;
  }
}
