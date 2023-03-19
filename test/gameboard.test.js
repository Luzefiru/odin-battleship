import { Gameboard } from '../src/gameboard';
import { Ship } from '../src/ship';

let testGameboard;
let shipClass;
let testShip;

beforeEach(() => {
  testGameboard = Gameboard();
  shipClass = 3;
  testShip = Ship(shipClass);
});

describe('Gameboard Factory Function methods', () => {
  it('placeShip() should place a ship on the grid', () => {
    const row = 0;
    const column = 1;
    testGameboard.placeShip(testShip, row, column);
    expect(
      testGameboard.getGrid()[row].slice(column, column + testShip.getLength())
    ).toEqual([shipClass, shipClass, shipClass]);
  });

  it('placeShip() should return true on successful operation', () => {
    const row = 0;
    const column = 1;
    expect(testGameboard.placeShip(testShip, row, column)).toBeTruthy();
  });

  it('placeShip() should fail when the ship is too long for the grid', () => {
    const row = 0;
    const column = 6;
    expect(testGameboard.placeShip(testShip, row, column)).toBeFalsy();
  });

  it('placeShip() should add the ship to the dictionary of ships, _shipDict', () => {
    const row = 0;
    const column = 1;
    const length = testShip.getLength();
    testGameboard.placeShip(testShip, row, column);
    expect(testGameboard.getShipDict()[length]).toEqual(testShip);
  });

  it("receiveAttack() should update the corresponding ship's hit counter in _shipDict", () => {
    const row = 0;
    const column = 1;
    const length = testShip.getLength();
    testGameboard.placeShip(testShip, row, column);
    testGameboard.receiveAttack(row, column);
    expect(testGameboard.getShipDict()[length].getTimesHit()).toBe(1);
  });
});
