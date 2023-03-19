import { Gameboard } from './gameboard';

function Player(name) {
  const _name = name;
  const _board = Gameboard();
  const getName = () => _name;
}

function Computer() {
  const _board = Gameboard();

  // does a random attack on the player's Gameboard
  const doRandomAttack = (playerBoard) => {
    let shotFlag = false;
    while (!shotFlag) {
      // picks random numbers from 0 to 6
      const row = Math.floor(Math.random() * 7);
      const col = Math.floor(Math.random() * 7);
      if (playerBoard.canReceiveAttack(row, col) === true) {
        playerBoard.receiveAttack(row, col);
        shotFlag = true;
      }
    }
  };

  return { doRandomAttack };
}
