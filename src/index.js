import { Ship } from './ship';
import { Gameboard } from './gameboard';
import { Player, Computer } from './player';

// setup player's board
const player = Player('TestPlayer');
player.deployShip(1, 0, 0);
player.deployShip(2, 3, 1);
player.deployShip(3, 1, 2);
player.deployShip(4, 4, 2);
player.deployShip(5, 6, 2);

console.log(player.getBoard().getGrid());

// setup computer's board
const computer = Computer();
computer.deployShip(1, 0, 0);
computer.deployShip(2, 0, 1);
computer.deployShip(3, 0, 3);
computer.deployShip(4, 1, 0);
computer.deployShip(5, 6, 2);

console.log(computer.getBoard().getGrid());
