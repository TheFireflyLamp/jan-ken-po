console.log("loading game");
let jankenpo = ['Scissors', 'Paper', 'Rock'] 
let playerScore = 0;
    let computerScore = 0;
    let round = 0;
   
    function game() {
     let userInput = prompt("Please Enter Your Selection (Paper, Scissors or Rock)")||"Pochi";
      
     let playerSelection = userInput.toLowerCase();
    
     let computerSelection = computerPlay();

     let resultText = playRound(playerSelection,computerSelection);

     console.log("Computer Selection: " + computerSelection);
     console.log("Your Score: " + playerScore);
     console.log("Computer Score: " + computerScore);

     console.log(resultText);
     
     if (!(playerScore==3|| computerScore==3)) {
       game();
     } 
     else {
       console.log("Game Over");
       if (confirm("Do you want to play again?")) {
         playerScore=0;
         computerScore=0;
         round=0;
         game();
       }
       else {
         console.log("Thank you for playing!");
       }
     }
   }

    
    function computerPlay() {
      let random = jankenpo[Math.floor(Math.random()*jankenpo.length)];
      return random;
    }
    
    
      
    function playRound(playerSelection, computerSelection) {
      if (playerSelection=='pochi') {
        playerScore=3;
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
game();
