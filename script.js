let pick = ["Pedra", "Papel", "Tesoura"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let computerSelection = pick[Math.floor(Math.random() * pick.length)];
  return computerSelection;
}

console.log(computerPlay());

function playerPlay() {
  let playerInput = prompt("Pedra, papel ou tesoura?");
  let playerSelection =
    playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
  console.log(playerSelection);
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Pedra" && computerSelection == "Tesoura") ||
    (playerSelection == "Tesoura" && computerSelection == "Papel") ||
    (playerSelection == "Papel" && computerSelection == "Pedra")
  ) {
    playerScore = ++playerScore;
    console.log(
      `Você venceu! ${playerSelection} ganha de ${computerSelection}!`
    );
  } else if (
    (playerSelection == "Pedra" && computerSelection == "Pedra") ||
    (playerSelection == "Papel" && computerSelection == "Papel") ||
    (playerSelection == "Tesoura" && computerSelection == "Tesoura")
  ) {
    console.log(`Empate! ${playerSelection} empata com ${computerSelection}!`);
  } else if (
    playerSelection != "Pedra" ||
    playerSelection != "Papel" ||
    playerSelection != "Tesoura"
  ) {
    console.log("Opção não válida.");
  } else {
    computerScore = ++computerScore;
    console.log(
      `Você perdeu! ${playerSelection} perde de ${computerSelection}!`
    );
  }
}

function runGame() {
  while (playerScore < 5 && computerScore < 5) {
    playRound(playerPlay(), computerPlay());
    console.log(`${playerScore} x ${computerScore}`);
    if (playerScore == 5) {
      console.log("Você ganhou a partida!");
    } else if (computerScore == 5) {
      console.log("Você perdeu a partida!");
    } else {
    }
  }
}

runGame();
