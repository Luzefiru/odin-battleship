import { Gameboard } from '../src/gameboard';
import { Player, Computer } from '../src/player';

describe('Computer Factory Function methods', () => {
  let computer;
  let player;

  beforeEach(() => {
    computer = Computer();
    player = Player('Test');
  });

  it('a single call to doRandomAttack() should make a cell get hit once', () => {
    computer.doRandomAttack(player);
    let hitCount = 0;
    for (let row of player.getBoard().getShotsGrid()) {
      for (let cell of row) {
        if (cell === 1) {
          hitCount++;
        }
      }
    }
    expect(hitCount).toBe(1);
  });

  it('5 calls to doRandomAttack() should make 5 cells get hit', () => {
    for (let i = 0; i < 5; i++) {
      computer.doRandomAttack(player);
    }

    let hitCount = 0;
    for (let row of player.getBoard().getShotsGrid()) {
      for (let cell of row) {
        if (cell === 1) {
          hitCount++;
        }
      }
    }
    expect(hitCount).toBe(5);
  });

  it('49 calls to doRandomAttack() should make 49 cells get hit', () => {
    for (let i = 0; i < 49; i++) {
      computer.doRandomAttack(player);
    }

    let hitCount = 0;
    for (let row of player.getBoard().getShotsGrid()) {
      for (let cell of row) {
        if (cell === 1) {
          hitCount++;
        }
      }
    }
    expect(hitCount).toBe(49);
  });

  it('a call to doAttack() should make a Computer board cell get hit once', () => {
    player.doAttack(computer, 0, 0);
    let hitCount = 0;
    for (let row of computer.getBoard().getShotsGrid()) {
      for (let cell of row) {
        if (cell === 1) {
          hitCount++;
        }
      }
    }
    expect(hitCount).toBe(1);
  });

  it('players should be able to doAttack() on a cell', () => {
    const hitFlag = player.doAttack(computer, 0, 0);
    expect(hitFlag).toBeTruthy();
  });

  it('players should not doAttack() on an already hit cell', () => {
    player.doAttack(computer, 0, 0);
    const hitFlag = player.doAttack(computer, 0, 0);
    expect(hitFlag).toBeFalsy();
  });
});
