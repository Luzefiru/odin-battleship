import { Ship } from './ship';

function Gameboard() {
  const _shipDict = {};
  const _addShipToDict = (ship) => {
    _shipDict[ship.getLength()] = ship;
  };
  const getShipDict = () => _shipDict;
  const _grid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  const _shotsGrid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  const getGrid = () => _grid;
  const getShotsGrid = () => _shotsGrid;

  const _canPlaceShip = (ship, row, col) => {
    const length = ship.getLength();
    // catcher for out of bounds (row)
    if (length + col > 7) {
      return false;
    }

    return true;
  };
  const placeShip = (ship, row, col) => {
    // if we cannot place ship, we exit immediately & return false denoting a failed operation
    if (_canPlaceShip(ship, row, col) === false) {
      return false;
    }
    // gets the length class of the ship
    const length = ship.getLength();
    // removes that amount of cells in the grid
    _grid[row].splice(col, length);
    // adds the ship class identifier into the grid
    for (let i = 0; i < length; i++) {
      _grid[row].splice(col, 0, length);
    }
    // add the Ship object to the _shipDict to track hits
    _addShipToDict(ship);
    // true denotes a successful operation
    return true;
  };

  const canReceiveAttack = (row, col) => {
    if (_shotsGrid[row][col] === 0) {
      return true;
    }
    return false;
  };

  const receiveAttack = (row, col) => {
    let hitFlag = false;
    // if the grid cell is occupied by a ship length (denotes the ship class),
    // we call its .hit() method
    if (getGrid()[row][col] !== 0) {
      hitFlag = true;
      _shipDict[getGrid()[row][col]].hit();
    } else if (getGrid()[row][col] === 0) {
      getGrid()[row][col] = 'miss';
    }
    // record the shot to prevent future shots in the same area
    _shotsGrid[row][col] = 1;

    return hitFlag;
  };

  const isAllSunk = () => {
    let allSunkFlag = true;
    for (let ship in _shipDict) {
      // exit early if a ship is not yet sunk
      if (_shipDict[ship].isSunk() === false) {
        return false;
      }
    }
    return allSunkFlag;
  };

  return {
    getShipDict,
    getGrid,
    placeShip,
    canReceiveAttack,
    receiveAttack,
    isAllSunk,
  };
}

export { Gameboard };
