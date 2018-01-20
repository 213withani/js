(function () {
  let totalNumberOfCells = 25;
  let cellsToHighlight = null;
  let footer = document.getElementById("footer");
  let wrongChoice = 0;
  let correctChoice = 0;
  let activeCell = [];
  let cellToClear = [];

  const gameTransition = {
    ready: "Ready",
    recall: "Recall",
    over: "Game Over"
  }

  function Game() {
    let allCellsPositions = [];
    header.innerHTML = "Memorize Game: You can only get 4 wrong answers.";

    allCellsPositions = createGrid();
    footer.innerHTML = gameTransition.ready;
    highlightCells(allCellsPositions);
    setTimeout(() => clearGrid(), 1000);
  }
  Game();

  function createGrid() {
    let cell = null,
      grid = null;
    let allCellsPositions = [];
    grid = document.querySelector(".wrapper");
    for (let m = 0; m < totalNumberOfCells; m++) {
      cell = document.createElement("div");
      cell.setAttribute("id", `${m}`);
      allCellsPositions.push(`${m}`);
      grid.appendChild(cell);
    }
    return allCellsPositions;
  }

  function highlightCells(allCellsPositions) {
    var cellToHighlight = null;
    cellsToHighlight = _.sampleSize(allCellsPositions, 6);
    for (let k = 0; k < cellsToHighlight.length; k++) {
      cellToHighlight = document.getElementById(cellsToHighlight[k]);
      cellToHighlight
        .classList
        .add("active");
    }
  }

  function clearGrid() {
    let cellToClear = null;
    for (let l = 0; l < totalNumberOfCells; l++) {
      cellToClear = document.getElementById(l);
      cellToClear
        .classList
        .remove("active");
    }
    allowUserToClickCells();

    footer.innerHTML = gameTransition.recall;
  }

  function allowUserToClickCells() {
    for (let i = 0; i < totalNumberOfCells; i++) {
      cellToClear.push(document.getElementById(i));
      activeCell[i] = clickCorrectCell.bind(cellToClear[i], i);
      cellToClear[i].addEventListener('click', activeCell[i]);
    }
  }

  function clickCorrectCell(num) {
    const correctCell = isCorrectCell.bind(this);
    correctCell(num);
  }

  function disableCells() {
    for (let j = 0; j < totalNumberOfCells; j++) {
      cellToClear[j].removeEventListener('click', activeCell[j]);
    }
  }

  function isCorrectCell(num) {
    
    const cellToHighlight = num.toString();
    for (let j = 0; j < cellsToHighlight.length; j++) {
      if (cellToHighlight === cellsToHighlight[j]) {
        this
          .classList
          .add("correct");
          correctChoice++;
        
      }
    }
    if (!this.classList.contains("correct")) {
      this
        .classList
        .add("wrong");
      
      wrongChoice++;
    }
    if (wrongChoice > 3 ) {
      
      disableCells();
      footer.innerHTML = gameTransition.over;
    }
    if (correctChoice === 6 ) {
      
      disableCells();
      footer.innerHTML = "Winner";
    }
  }
})();