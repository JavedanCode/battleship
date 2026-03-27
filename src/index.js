import "../src/styles.css";
import gameController from "./gameController";
import {
  setBoardContainer,
  onCellClickHandler,
  renderBoard,
  updateCell,
} from "./ui/board.js";
import Ship from "./ship";
import renderLayout from "./ui/layout";

let shipsToPlace = [5, 4, 3, 3, 2];
let currentShipIndex = 0;
let direction = "horizontal";

const controller = gameController();

const content = renderLayout();
document.body.appendChild(content);

const playerContainer = document.getElementById("player-board");
const enemyContainer = document.getElementById("enemy-board");

setBoardContainer("player", playerContainer);
setBoardContainer("enemy", enemyContainer);

renderBoard("player");
renderBoard("enemy");

let gameStarted = false;
let aiTargets = [];

onCellClickHandler("player", (x, y) => {
  if (currentShipIndex >= shipsToPlace.length) return;

  const length = shipsToPlace[currentShipIndex];
  const ship = Ship(length);

  const success = controller.player1.gameboard.placeShip(ship, x, y, direction);

  if (!success) return;

  const board = controller.player1.gameboard.getBoard();

  for (let i = 0; i < length; i++) {
    const cx = direction === "vertical" ? x + i : x;
    const cy = direction === "horizontal" ? y + i : y;

    const cellEl = document.querySelector(
      `#player-board [data-x="${cx}"][data-y="${cy}"]`,
    );

    if (cellEl) {
      cellEl.classList.add("ship");
    }
  }

  currentShipIndex++;

  if (currentShipIndex === shipsToPlace.length) {
    console.log("All ships placed. Game starts.");

    placeEnemyShips();
    gameStarted = true;
  }
});

onCellClickHandler("enemy", (x, y) => {
  if (!gameStarted) return;
  const result = controller.playTurn(x, y);

  if (result === "already hit") return;

  let board = controller.player2.gameboard.getBoard();
  let cellData = board[x][y];
  updateCell("enemy", x, y, cellData);

  if (result === "gameover") console.log("Player wins!");

  const playerBoard = controller.player1.gameboard.getBoard();

  let ex, ey;

  if (aiTargets.length > 0) {
    [ex, ey] = aiTargets.shift();
  } else {
    do {
      ex = Math.floor(Math.random() * 10);
      ey = Math.floor(Math.random() * 10);
    } while (playerBoard[ex][ey].attacked);
  }

  const enemyResult = controller.playTurn(ex, ey);

  const playerCell = playerBoard[ex][ey];

  if (enemyResult === "gameover") {
    console.log("Enemy wins!");
    return;
  }
  updateCell("player", ex, ey, playerCell);
  if (enemyResult === "hit") {
    const directions = [
      [ex + 1, ey],
      [ex - 1, ey],
      [ex, ey + 1],
      [ex, ey - 1],
    ];

    directions.forEach(([nx, ny]) => {
      if (
        nx >= 0 &&
        nx < 10 &&
        ny >= 0 &&
        ny < 10 &&
        !playerBoard[nx][ny].attacked
      ) {
        aiTargets.push([nx, ny]);
      }
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r") {
    direction = direction === "horizontal" ? "vertical" : "horizontal";
    console.log("Direction:", direction);
  }
});

document.getElementById("rotate-btn").addEventListener("click", () => {
  direction = direction === "horizontal" ? "vertical" : "horizontal";
  console.log("Direction:", direction);
});

function placeEnemyShips() {
  const ships = [5, 4, 3, 3, 2];

  ships.forEach((length) => {
    let placed = false;

    while (!placed) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

      const ship = Ship(length);

      placed = controller.player2.gameboard.placeShip(ship, x, y, direction);
    }
  });
}
