import Ship from "../src/ship";
import gameController from "../src/gameController";

describe("Gamecontroller tests", () => {
  test("playTurn returns hit if player hits target", () => {
    const gc = gameController();
    const ship1 = Ship(1);
    const ship2 = Ship(1);
    const ship3 = Ship(1);
    gc.player1.gameboard.placeShip(ship1, 1, 2);
    gc.player2.gameboard.placeShip(ship2, 1, 3);
    gc.player2.gameboard.placeShip(ship3, 1, 4);

    expect(gc.playTurn(1, 3)).toEqual("hit");
  });

  test("playTurn returns miss if player misses target", () => {
    const gc = gameController();
    const ship1 = Ship(1);
    const ship2 = Ship(1);
    gc.player1.gameboard.placeShip(ship1, 1, 2);
    gc.player2.gameboard.placeShip(ship2, 1, 3);

    expect(gc.playTurn(1, 2)).toEqual("miss");
  });

  test("playTurn returns already hit if player hits a cell again", () => {
    const gc = gameController();
    const ship1 = Ship(1);
    const ship2 = Ship(1);
    const ship3 = Ship(1);
    gc.player1.gameboard.placeShip(ship1, 1, 2);
    gc.player2.gameboard.placeShip(ship2, 1, 3);
    gc.player2.gameboard.placeShip(ship3, 1, 7);
    gc.playTurn(1, 3); // player 1's turn
    gc.playTurn(1, 5); // player 2's turn
    gc.playTurn(1, 3); // player 1's turn tries to hit same target.
    expect(gc.playTurn(1, 3)).toEqual("already hit");
  });

  test("playTurn returns gameover if all ships on enemy ship are sunk", () => {
    const gc = gameController();
    const ship1 = Ship(1);
    const ship2 = Ship(1);
    gc.player1.gameboard.placeShip(ship1, 1, 2);
    gc.player2.gameboard.placeShip(ship2, 1, 3);

    expect(gc.playTurn(1, 3)).toEqual("gameover");
  });
});
