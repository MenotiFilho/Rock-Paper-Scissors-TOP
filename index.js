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
        document.getElementById(
          "cpu-pick"
        ).textContent = `${computerSelection}`;
        document.getElementById("player-pick").textContent = `${playerChoice}`;
      } else if (
        (playerChoice === "Pedra" && computerSelection === "Pedra") ||
        (playerChoice === "Papel" && computerSelection === "Papel") ||
        (playerChoice === "Tesoura" && computerSelection === "Tesoura")
      ) {
        console.log(`Empate! ${playerChoice} empata com ${computerSelection}!`);
        document.getElementById(
          "cpu-pick"
        ).textContent = `${computerSelection}`;
        document.getElementById("player-pick").textContent = `${playerChoice}`;
      } else {
        computerScore = ++computerScore;
        console.log(
          `Você perdeu! ${playerChoice} perde de ${computerSelection}!`
        );
        document.getElementById(
          "cpu-pick"
        ).textContent = `${computerSelection}`;
        document.getElementById("player-pick").textContent = `${playerChoice}`;
      }
    } else {
    }
  }

  function playerPlay(clicked) {
    playerChoice = this.id;
    playRound(playerChoice, computerPlay());
    console.log(`${playerScore} x ${computerScore}`);
    document.getElementById("player-score").textContent = `${playerScore}`;
    document.getElementById("cpu-score").textContent = `${computerScore}`;

    if (playerScore < 5 && computerScore < 5) {
      document.getElementById("player-score").textContent = `${playerScore}`;
      document.getElementById("cpu-score").textContent = `${computerScore}`;
    } else if (playerScore === 5) {
      console.log("Você ganhou a partida!");
      document.getElementById(
        "point-title"
      ).textContent = `Você ganhou a partida!`;
    } else if (computerScore === 5) {
      document.getElementById(
        "point-title"
      ).textContent = `Você perdeu a partida!`;
    } else {
    }
  }
};
