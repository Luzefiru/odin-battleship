import { Gameboard } from './gameboard';

function Player(name) {
  const _name = name;
  const _board = Gameboard();
  const getName = () => _name;
  const getBoard = () => _board;

  const doAttack = (enemy, row, col) => {
    let shotFlag = false;
    const enemyBoard = enemy.getBoard();
    if (enemyBoard.canReceiveAttack(row, col) === true) {
      enemyBoard.receiveAttack(row, col);
      shotFlag = true;
    }
    return shotFlag;
  };

  return { getName, getBoard, doAttack };
}

function Computer() {
  const _board = Gameboard();
  const getBoard = () => _board;

  // does a random attack on the player's Gameboard
  const doRandomAttack = (player) => {
    const playerBoard = player.getBoard();
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
    return shotFlag;
  };

  return { getBoard, doRandomAttack };
}

export { Player, Computer };
