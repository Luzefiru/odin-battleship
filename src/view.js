const viewModule = (function () {
  const renderBoards = (player, enemy) => {
    const boardOfPlayer = document.querySelector('.grid--player');
    const boardOfEnemy = document.querySelector('.grid--enemy');

    let rowCtr;
    let cellCtr;
    // renders player's board
    rowCtr = 0;
    cellCtr = 0;
    for (let row of player.getBoard().getGrid()) {
      console.log(row);
      for (let cell of row) {
        const newCell = document.createElement('div');
        newCell.classList.add('grid--player__cell', 'cell');

        if (player.getBoard().getShotsGrid()[rowCtr][cellCtr] === 1) {
          if (cell !== 'miss') {
            newCell.classList.add('confirm');
          }
          newCell.classList.add('hit');
        }

        if (cell !== 'miss' && cell !== 0) {
          newCell.classList.add('ship');
        }

        boardOfPlayer.append(newCell);
        cellCtr++;
      }
      rowCtr++;
    }

    // renders enemy's board
    rowCtr = 0;
    cellCtr = 0;
    for (let row of enemy.getBoard().getGrid()) {
      for (let cell of row) {
        const newCell = document.createElement('div');
        newCell.classList.add('grid--enemy_cell', 'cell');

        if (enemy.getBoard().getShotsGrid()[rowCtr][cellCtr] === 1) {
          if (cell !== 'miss') {
            newCell.classList.add('confirm');
          }
          newCell.classList.add('hit');
        }

        boardOfEnemy.append(newCell);
        cellCtr++;
      }
      rowCtr++;
    }
  };

  return { renderBoards };
})();

export { viewModule };
