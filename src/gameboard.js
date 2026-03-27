export default function gameboard() {
  function createBoard() {
    const board = [];

    for (let i = 0; i < 10; i++) {
      const row = [];

      for (let j = 0; j < 10; j++) {
        row.push(null);
      }

      board.push(row);
    }

    return board;
  }

  const board = createBoard();
  let attacked = new Set();
  let misses = new Set();
  let ships = new Set();
  function placeShip(ship, x, y) {
    board[x][y] = ship;
    ships.add(ship);
  }

  function allShipsSunk() {
    return Array.from(ships).every((ship) => ship.isSunk());
  }

  function receiveAttack(x, y) {
    if (attacked.has(`${x},${y}`)) {
      return "already hit";
    }
    attacked.add(`${x},${y}`);
    if (board[x][y] !== null) {
      board[x][y].hit();
      return "hit";
    } else {
      misses.add(`${x},${y}`);
      return "miss";
    }
  }

  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
}
