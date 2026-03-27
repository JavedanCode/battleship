import Player from "../src/player";
import gameboard from "../src/gameboard";
import Ship from "../src/ship";

describe("Player tests", () => {
  test("player attack return hit if it hits enemy ship", () => {
    const playerBoard = gameboard();
    const enemyBoard = gameboard();
    const player = Player(playerBoard);
    const enemyShip = Ship(1);
    enemyBoard.placeShip(enemyShip, 1, 2);
    expect(player.attack(enemyBoard, 1, 2)).toEqual("hit");
  });
  test("player attack sinks enemy ship", () => {
    const playerBoard = gameboard();
    const enemyBoard = gameboard();
    const player = Player(playerBoard);
    const enemyShip = Ship(1);
    enemyBoard.placeShip(enemyShip, 1, 2);
    player.attack(enemyBoard, 1, 2);
    expect(enemyBoard.allShipsSunk()).toBe(true);
  });
  test("attacking the same place again returns already hit", () => {
    const playerBoard = gameboard();
    const enemyBoard = gameboard();
    const player = Player(playerBoard);
    const enemyShip = Ship(1);
    enemyBoard.placeShip(enemyShip, 1, 2);
    player.attack(enemyBoard, 1, 2);
    expect(player.attack(enemyBoard, 1, 2)).toEqual("already hit");
  });
  test("missing the target returns miss", () => {
    const playerBoard = gameboard();
    const enemyBoard = gameboard();
    const player = Player(playerBoard);
    const enemyShip = Ship(1);
    enemyBoard.placeShip(enemyShip, 1, 2);
    expect(player.attack(enemyBoard, 1, 3)).toEqual("miss");
  });
});
