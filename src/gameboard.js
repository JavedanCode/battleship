export default function gameboard() {
  function createBoard() {
    const board = [];

    for (let i = 0; i < 10; i++) {
      const row = [];

      for (let j = 0; j < 10; j++) {
        row.push({
          ship: null,
          attacked: false,
        });
      }

      board.push(row);
    }

    return board;
  }

  const board = createBoard();
  let ships = new Set();

  function placeShip(ship, x, y, direction) {
    const length = ship.length;
    const coords = [];

    for (let i = 0; i < length; i++) {
      const newX = direction === "vertical" ? x + i : x;
      const newY = direction === "horizontal" ? y + i : y;

      if (newX >= 10 || newY >= 10) return false;

      if (board[newX][newY].ship) return false;

      coords.push([newX, newY]);
    }

    coords.forEach(([cx, cy]) => {
      board[cx][cy].ship = ship;
    });

    ships.add(ship);
    return true;
  }

  function allShipsSunk() {
    return Array.from(ships).every((ship) => ship.isSunk());
  }

  function receiveAttack(x, y) {
    const cell = board[x][y];

    if (cell.attacked) {
      return "already hit";
    }

    cell.attacked = true;

    if (cell.ship) {
      cell.ship.hit();
      return "hit";
    } else {
      return "miss";
    }
  }

  function getBoard() {
    return board;
  }

  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
    getBoard,
  };
}
