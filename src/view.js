const viewModule = (function () {
  const clearBoard = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };
  const displayMessage = (main, subtext) => {
    const mainText = document.querySelector('.announcements__main');
    const subText = document.querySelector('.announcements__subtext');
    mainText.textContent = main;
    subText.textContent = subtext;
  };
  const renderBoards = (player, enemy) => {
    const boardOfPlayer = document.querySelector('.grid--player');
    const boardOfEnemy = document.querySelector('.grid--enemy');

    let rowCtr;
    let cellCtr;
    // renders player's board
    rowCtr = 0;
    for (let row of player.getBoard().getGrid()) {
      cellCtr = 0;
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
    for (let row of enemy.getBoard().getGrid()) {
      cellCtr = 0;
      for (let cell of row) {
        const newCell = document.createElement('div');
        newCell.classList.add('grid--enemy_cell', 'cell');

        if (enemy.getBoard().getShotsGrid()[rowCtr][cellCtr] === 1) {
          if (cell !== 'miss') {
            newCell.classList.add('confirm');
          }
          newCell.classList.add('hit');
        }

        newCell.id = `${rowCtr}-${cellCtr}`;

        // if it wasn't hit
        if (!newCell.classList.contains('hit')) {
          newCell.addEventListener('click', () => {
            const x = Number(newCell.id.split('-')[0]);
            const y = Number(newCell.id.split('-')[1]);
            console.log(x, y);
            const hitFlag = player.doAttack(enemy, x, y);
            if (hitFlag) {
              displayMessage(
                'You hit a ship!',
                "Pick a cell in the opponent's board."
              );
            } else {
              displayMessage('You missed!', 'Try again.');
            }
            clearBoard(boardOfPlayer);
            clearBoard(boardOfEnemy);
            enemy.doRandomAttack(player);
            if (enemy.getBoard().isAllSunk()) {
              displayMessage('You win!', 'Refresh the page to play again.');
            }
            if (player.getBoard().isAllSunk()) {
              displayMessage('You lose!', 'Refresh the page to play again.');
            }
            renderBoards(player, enemy);
          });
        }

        boardOfEnemy.append(newCell);
        cellCtr++;
      }
      rowCtr++;
    }
  };

  return { displayMessage, clearBoard, renderBoards };
})();

export { viewModule };
