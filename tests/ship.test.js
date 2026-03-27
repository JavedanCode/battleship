import Ship from "../src/ship";

describe("Ship", () => {
  test("ship is not sunk after one hit", () => {
    const ship = Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("ship is sunk after 2 hits", () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("hit does nothing after sinking!", () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
