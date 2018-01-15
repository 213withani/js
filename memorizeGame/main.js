(function () {
  let totalNumberOfCells = 25;
  let cellsToHighlight = null;
  let footer = document.getElementById('footer');

  function Game() {
    const allCellsPositions = createGrid();
    highlightCells(allCellsPositions);
    setTimeout(() => clearGrid(), 5000);
  }

  Game();

  function createGrid() {
    let cell = null,
      grid = null;
    let allCellsPositions = [];

    grid = document.querySelector('.wrapper');

    for (let i = 0; i < totalNumberOfCells; i++) {
      cell = document.createElement('div');
      cell.setAttribute('id', `${i}`);

      cell.addEventListener('click', function () {
        var correctCell = isCorrectCell.bind(this);
        correctCell(i);
      });

      allCellsPositions.push(`${i}`);
      grid.appendChild(cell);
    }

    footer.innerHTML = 'Get Ready';
    return allCellsPositions;
  }

  function highlightCells(allCellsPositions) {

    var cellToHighlight = null;
    cellsToHighlight = _.sampleSize(allCellsPositions, 6);

    for (let i = 0; i < cellsToHighlight.length; i++) {
      cellToHighlight = document.getElementById(cellsToHighlight[i]);
      cellToHighlight
        .classList
        .add('active');
    }
  }

  function clearGrid() {
    let cellToClear = null;

    for (let i = 0; i < totalNumberOfCells; i++) {
      cellToClear = document.getElementById(i);
      cellToClear
        .classList
        .remove('active');
    }
    footer.innerHTML = "Recall";
  }

  function isCorrectCell(i) {
    // debugger;
    const cellToHighlight = i.toString();
    for (let j = 0; j < cellsToHighlight.length; j++) {
      if (cellToHighlight === cellsToHighlight[j]) {
        this
          .classList
          .add('correct');
      }
    }
    if (!this.classList.contains('correct')) {
      this
        .classList
        .add('wrong');
    }
  }

})();