import gameboard from "./gameboard";
import Player from "./player";

export default function gameController() {
  const playerBoard = gameboard();
  const enemyBoard = gameboard();
  const player1 = Player(playerBoard);
  const player2 = Player(enemyBoard);
  let gameOver = false;
  let winner = null;

  let currentPlayer = player1;

  function switchPlayer() {
    currentPlayer === player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);
  }

  function playTurn(x, y) {
    if (gameOver) {
      console.log("game is already over");
      return;
    }
    let enemy;
    currentPlayer === player1 ? (enemy = player2) : (enemy = player1);
    const result = currentPlayer.attack(enemy.gameboard, x, y);
    if (result === "already hit") {
      return result;
    } else if (enemy.gameboard.allShipsSunk()) {
      gameOver = true;
      winner = currentPlayer;
      return "gameover";
    } else {
      switchPlayer();
      return result;
    }
  }

  function isGameOver() {
    return gameOver;
  }

  return {
    playTurn,
    player1,
    player2,
    isGameOver,
  };
}
