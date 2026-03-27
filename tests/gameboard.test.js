import Ship from "../src/ship.js";
import gameboard from "../src/gameboard.js";

describe("Gameboard", () => {
  test("receiveAttack() return hit after landing a hit", () => {
    const gb = gameboard();
    const ship = Ship(1);
    gb.placeShip(ship, 1, 2);
    expect(gb.receiveAttack(1, 2)).toEqual("hit");
  });
  test("receiveAttack() return miss after missing ship", () => {
    const gb = gameboard();
    expect(gb.receiveAttack(2, 2)).toEqual("miss");
  });
  test("receiveAttack() return already hit trying to hit a cell that was hit before", () => {
    const gb = gameboard();
    gb.receiveAttack(2, 2);
    expect(gb.receiveAttack(2, 2)).toEqual("already hit");
  });
  test("allShipsSunk() returns true if all ships are sunk ", () => {
    const gb = gameboard();
    const ship = Ship(1);
    gb.placeShip(ship, 1, 2);
    gb.receiveAttack(1, 2);
    expect(gb.allShipsSunk()).toBe(true);
  });
  test("allShipsSunk() returns false if not all ships are sunk ", () => {
    const gb = gameboard();
    const ship1 = Ship(1);
    const ship2 = Ship(1);
    gb.placeShip(ship1, 1, 2);
    gb.placeShip(ship2, 2, 3);
    gb.receiveAttack(2, 3);
    expect(gb.allShipsSunk()).toBe(false);
  });
});
