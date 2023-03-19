/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\r\n\r\nfunction Gameboard() {\r\n  const _shipDict = {};\r\n  const _addShipToDict = (ship) => {\r\n    _shipDict[ship.getLength()] = ship;\r\n  };\r\n  const getShipDict = () => _shipDict;\r\n  const _grid = [\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n  ];\r\n  const _shotsGrid = [\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n    [0, 0, 0, 0, 0, 0, 0],\r\n  ];\r\n  const getGrid = () => _grid;\r\n  const getShotsGrid = () => _shotsGrid;\r\n\r\n  const _canPlaceShip = (ship, row, col) => {\r\n    const length = ship.getLength();\r\n    // catcher for out of bounds (row)\r\n    if (length + col > 7) {\r\n      return false;\r\n    }\r\n\r\n    return true;\r\n  };\r\n  const placeShip = (ship, row, col) => {\r\n    // if we cannot place ship, we exit immediately & return false denoting a failed operation\r\n    if (_canPlaceShip(ship, row, col) === false) {\r\n      return false;\r\n    }\r\n    // gets the length class of the ship\r\n    const length = ship.getLength();\r\n    // removes that amount of cells in the grid\r\n    _grid[row].splice(col, length);\r\n    // adds the ship class identifier into the grid\r\n    for (let i = 0; i < length; i++) {\r\n      _grid[row].splice(col, 0, length);\r\n    }\r\n    // add the Ship object to the _shipDict to track hits\r\n    _addShipToDict(ship);\r\n    // true denotes a successful operation\r\n    return true;\r\n  };\r\n\r\n  const canReceiveAttack = (row, col) => {\r\n    if (_shotsGrid[row][col] === 0) {\r\n      return true;\r\n    }\r\n    return false;\r\n  };\r\n\r\n  const receiveAttack = (row, col) => {\r\n    let hitFlag = false;\r\n    // if the grid cell is occupied by a ship length (denotes the ship class),\r\n    // we call its .hit() method\r\n    if (getGrid()[row][col] !== 0) {\r\n      hitFlag = true;\r\n      _shipDict[getGrid()[row][col]].hit();\r\n    } else if (getGrid()[row][col] === 0) {\r\n      getGrid()[row][col] = 'miss';\r\n    }\r\n    // record the shot to prevent future shots in the same area\r\n    _shotsGrid[row][col] = 1;\r\n\r\n    return hitFlag;\r\n  };\r\n\r\n  const isAllSunk = () => {\r\n    let allSunkFlag = true;\r\n    for (let ship in _shipDict) {\r\n      // exit early if a ship is not yet sunk\r\n      if (_shipDict[ship].isSunk() === false) {\r\n        return false;\r\n      }\r\n    }\r\n    return allSunkFlag;\r\n  };\r\n\r\n  return {\r\n    getShipDict,\r\n    getGrid,\r\n    getShotsGrid,\r\n    placeShip,\r\n    canReceiveAttack,\r\n    receiveAttack,\r\n    isAllSunk,\r\n  };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\r\n\r\n\r\n\r\n\r\n// setup player's board\r\nconst player = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Player)('TestPlayer');\r\nplayer.deployShip(1, 0, 0);\r\nplayer.deployShip(2, 3, 1);\r\nplayer.deployShip(3, 1, 2);\r\nplayer.deployShip(4, 4, 2);\r\nplayer.deployShip(5, 6, 2);\r\n\r\n// setup computer's board\r\nconst computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__.Computer)();\r\ncomputer.deployShip(1, 0, 0);\r\ncomputer.deployShip(2, 0, 1);\r\ncomputer.deployShip(3, 0, 3);\r\ncomputer.deployShip(4, 1, 0);\r\ncomputer.deployShip(5, 6, 2);\r\n\r\n_view__WEBPACK_IMPORTED_MODULE_3__.viewModule.renderBoards(player, computer);\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Computer\": () => (/* binding */ Computer),\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _src_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ship */ \"./src/ship.js\");\n\r\n\r\n\r\nfunction Player(name) {\r\n  const _name = name;\r\n  const _board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\r\n  const getName = () => _name;\r\n  const getBoard = () => _board;\r\n\r\n  const doAttack = (enemy, row, col) => {\r\n    let hitFlag = false;\r\n    const enemyBoard = enemy.getBoard();\r\n    if (enemyBoard.canReceiveAttack(row, col) === true) {\r\n      hitFlag = enemyBoard.receiveAttack(row, col);\r\n    }\r\n    return hitFlag;\r\n  };\r\n\r\n  const deployShip = (shipLength, row, col) => {\r\n    // returns true on successful deployment\r\n    return _board.placeShip((0,_src_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(shipLength), row, col);\r\n  };\r\n\r\n  return { getName, getBoard, doAttack, deployShip };\r\n}\r\n\r\nfunction Computer() {\r\n  const _board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\r\n  const getBoard = () => _board;\r\n\r\n  // does a random attack on the player's Gameboard\r\n  const doRandomAttack = (player) => {\r\n    const playerBoard = player.getBoard();\r\n    let shotFlag = false;\r\n    while (!shotFlag) {\r\n      // picks random numbers from 0 to 6\r\n      const row = Math.floor(Math.random() * 7);\r\n      const col = Math.floor(Math.random() * 7);\r\n      if (playerBoard.canReceiveAttack(row, col) === true) {\r\n        playerBoard.receiveAttack(row, col);\r\n        shotFlag = true;\r\n      }\r\n    }\r\n    return shotFlag;\r\n  };\r\n\r\n  const deployShip = (shipLength, row, col) => {\r\n    // returns true on successful deployment\r\n    return _board.placeShip((0,_src_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(shipLength), row, col);\r\n  };\r\n\r\n  return { getBoard, doRandomAttack, deployShip };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(length) {\r\n  let timesHit = 0;\r\n\r\n  const getLength = () => length;\r\n  const getTimesHit = () => timesHit;\r\n  const hit = () => {\r\n    timesHit++;\r\n  };\r\n  const isSunk = () => timesHit >= length;\r\n\r\n  return { getLength, getTimesHit, hit, isSunk };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/ship.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"viewModule\": () => (/* binding */ viewModule)\n/* harmony export */ });\nconst viewModule = (function () {\r\n  const clearBoard = (parent) => {\r\n    while (parent.firstChild) {\r\n      parent.removeChild(parent.firstChild);\r\n    }\r\n  };\r\n  const displayMessage = (main, subtext) => {\r\n    const mainText = document.querySelector('.announcements__main');\r\n    const subText = document.querySelector('.announcements__subtext');\r\n    mainText.textContent = main;\r\n    subText.textContent = subtext;\r\n  };\r\n  const renderBoards = (player, enemy) => {\r\n    const boardOfPlayer = document.querySelector('.grid--player');\r\n    const boardOfEnemy = document.querySelector('.grid--enemy');\r\n\r\n    let rowCtr;\r\n    let cellCtr;\r\n    // renders player's board\r\n    rowCtr = 0;\r\n    for (let row of player.getBoard().getGrid()) {\r\n      cellCtr = 0;\r\n      for (let cell of row) {\r\n        const newCell = document.createElement('div');\r\n        newCell.classList.add('grid--player__cell', 'cell');\r\n\r\n        if (player.getBoard().getShotsGrid()[rowCtr][cellCtr] === 1) {\r\n          if (cell !== 'miss') {\r\n            newCell.classList.add('confirm');\r\n          }\r\n          newCell.classList.add('hit');\r\n        }\r\n\r\n        if (cell !== 'miss' && cell !== 0) {\r\n          newCell.classList.add('ship');\r\n        }\r\n\r\n        boardOfPlayer.append(newCell);\r\n        cellCtr++;\r\n      }\r\n      rowCtr++;\r\n    }\r\n\r\n    // renders enemy's board\r\n    rowCtr = 0;\r\n    for (let row of enemy.getBoard().getGrid()) {\r\n      cellCtr = 0;\r\n      for (let cell of row) {\r\n        const newCell = document.createElement('div');\r\n        newCell.classList.add('grid--enemy_cell', 'cell');\r\n\r\n        if (enemy.getBoard().getShotsGrid()[rowCtr][cellCtr] === 1) {\r\n          if (cell !== 'miss') {\r\n            newCell.classList.add('confirm');\r\n          }\r\n          newCell.classList.add('hit');\r\n        }\r\n\r\n        newCell.id = `${rowCtr}-${cellCtr}`;\r\n\r\n        // if it wasn't hit\r\n        if (!newCell.classList.contains('hit')) {\r\n          newCell.addEventListener('click', () => {\r\n            const x = Number(newCell.id.split('-')[0]);\r\n            const y = Number(newCell.id.split('-')[1]);\r\n            console.log(x, y);\r\n            const hitFlag = player.doAttack(enemy, x, y);\r\n            if (hitFlag) {\r\n              displayMessage(\r\n                'You hit a ship!',\r\n                \"Pick a cell in the opponent's board.\"\r\n              );\r\n            } else {\r\n              displayMessage('You missed!', 'Try again.');\r\n            }\r\n            clearBoard(boardOfPlayer);\r\n            clearBoard(boardOfEnemy);\r\n            enemy.doRandomAttack(player);\r\n            if (enemy.getBoard().isAllSunk()) {\r\n              displayMessage('You win!', 'Refresh the page to play again.');\r\n            }\r\n            if (player.getBoard().isAllSunk()) {\r\n              displayMessage('You lose!', 'Refresh the page to play again.');\r\n            }\r\n            renderBoards(player, enemy);\r\n          });\r\n        }\r\n\r\n        boardOfEnemy.append(newCell);\r\n        cellCtr++;\r\n      }\r\n      rowCtr++;\r\n    }\r\n  };\r\n\r\n  return { displayMessage, clearBoard, renderBoards };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-battleship/./src/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;