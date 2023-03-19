import { Ship } from '../src/ship';

let testShip;

beforeEach(() => {
  testShip = Ship(3);
});

describe('Ship Factory Function methods', () => {
  it('hit() increments timesHit by 1', () => {
    const initial = testShip.getTimesHit();
    testShip.hit();
    const final = testShip.getTimesHit();
    expect(final - initial).toBe(1);
  });
  it('isSunk() returns false if the ship was not hit as much as its size', () => {
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBeFalsy();
  });
  it('isSunk() returns true if the ship was hit as much as its size', () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBeTruthy();
  });
  it('isSunk() returns true if the ship was hit more than its size', () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBeTruthy();
  });
});
