window.onload = function () {
  document.getElementById("Pedra").onclick = playerPlay;
  document.getElementById("Papel").onclick = playerPlay;
  document.getElementById("Tesoura").onclick = playerPlay;

  const pick = ["Pedra", "Papel", "Tesoura"];
  let playerScore = 0;
  let computerScore = 0;

  function computerPlay() {
    let computerSelection = pick[Math.floor(Math.random() * pick.length)];
    return computerSelection;
  }

  function playRound(playerChoice, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {
      if (
        (playerChoice === "Pedra" && computerSelection === "Tesoura") ||
        (playerChoice === "Tesoura" && computerSelection === "Papel") ||
        (playerChoice === "Papel" && computerSelection === "Pedra")
      ) {
        playerScore = ++playerScore;
        console.log(
          `Você venceu! ${playerChoice} ganha de ${computerSelection}!`
        );
      } else if (
        (playerChoice === "Pedra" && computerSelection === "Pedra") ||
        (playerChoice === "Papel" && computerSelection === "Papel") ||
        (playerChoice === "Tesoura" && computerSelection === "Tesoura")
      ) {
        console.log(`Empate! ${playerChoice} empata com ${computerSelection}!`);
      } else {
        computerScore = ++computerScore;
        console.log(
          `Você perdeu! ${playerChoice} perde de ${computerSelection}!`
        );
      }
    } else {
    }
  }

  function playerPlay(clicked) {
    playerChoice = this.id;
    playRound(playerChoice, computerPlay());
    console.log(`${playerScore} x ${computerScore}`);
    if (playerScore === 5 || computerScore === 5) {
      console.log("Você ganhou a partida!");
      alert("Você ganhou a partida! Aperte OK para jogar novamente.");
      window.location.reload();
    }
  }
};
