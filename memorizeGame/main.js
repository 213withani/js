(function() {
  let totalNumberOfCells = 25;
  numberOfCellsToHighlight=6;

  let cellsToHighlight = null;

  let wrongChoice = 0;
  let correctChoice = 0;

  let activeCell = [];
  let cellToClear = [];

  const labels = {
    instructions: "Memorize Game: You can only get 4 wrong answers.",
    gameReady: "Ready",
    gameRecall: "Recall",
    gameOver: "Game Over",
    gameWinner: "Winner"
  };

  function displayLabel(pos, lbl) {
    document.getElementById(pos).innerHTML = lbl;
  }

  function Game() {
    let allCellsCreatedInGrid = [];

    allCellsCreatedInGrid = createGrid();
    displayLabel("footer", labels.gameReady);
    highlightActiveCells(allCellsCreatedInGrid);
    setTimeout(() => clearStatusInGrid("active"), 1000);
    allowUserToClickCells();
  }

  startGamePlay();

  function startGamePlay() {
    const letUserPlay = document.getElementById("playBtn");

    displayLabel("header", labels.instructions);
    letUserPlay.addEventListener("click", function() {
      
      Game();
    });
  }

  function createGrid() {
    let cell = null,
      grid = [];
    let createCellsPositions = [];

    grid = document.querySelector(".grid");

    for (let cellId = 0; cellId < totalNumberOfCells; cellId++) {
      cell = document.createElement("div");
      cell.setAttribute("id", `${cellId}`);
      createCellsPositions.push(`${cellId}`);
      grid.appendChild(cell);
    }

    return createCellsPositions;
  }

  function highlightActiveCells(allCellsPositions) {
    var cellToHighlight = [];

    cellsToHighlight = _.sampleSize(allCellsPositions, numberOfCellsToHighlight);
    cellsToHighlight.map(function(cell) {
      document.getElementById(cell).classList.add("active");
    });
  }

  function clearStatusInGrid(cellStatus) {
    for (
      let cellIdToClear = 0;
      cellIdToClear < totalNumberOfCells;
      cellIdToClear++
    ) {
      cellToClear = document.getElementById(cellIdToClear);
      cellToClear.classList.remove(cellStatus);
    }

    displayLabel("footer", labels.gameRecall);
  }

  function deleteGrid() {
    correctChoice = 0;
    wrongChoice = 0;

    displayLabel("footer", "");

    for (
      let cellIdToDelete = 0;
      cellIdToDelete < totalNumberOfCells;
      cellIdToDelete++
    ) {
      cellToClear = document.getElementById(cellIdToDelete);
      cellToClear.remove();
    }
  }

  function allowUserToClickCells() {
    let clickableCell = [];

    for (let i = 0; i < totalNumberOfCells; i++) {
      clickableCell.push(document.getElementById(i));
      activeCell[i] = clickCorrectCell.bind(clickableCell[i], i);
      clickableCell[i].addEventListener("click", activeCell[i]);
    }
  }

  function clickCorrectCell(num) {
    const correctCell = isCorrectCell.bind(this);
    correctCell(num);
  }

  function disableCells() {
    let cellToRemoveEvent = [];

    for (let cell = 0; cell < totalNumberOfCells; cell++) {
      cellToRemoveEvent = document.getElementById(cell);
      cellToRemoveEvent.removeEventListener("click", activeCell[cell]);
    }
  }

  function isCorrectCell(num) {
    const cellToHighlight = num.toString();

    cellsToHighlight.map((cell) => {
      if (cellToHighlight === cell) {
            this.classList.add("correct");
            correctChoice++;
          }
    });

    if (!this.classList.contains("correct")) {
      this.classList.add("wrong");
      wrongChoice++;
    }
    if (wrongChoice > 3) {
      disableCells();
      setTimeout(() => deleteGrid(), 2000);
      displayLabel("footer", labels.gameOver);
    }
    if (correctChoice === 6) {
      disableCells();
      setTimeout(() => deleteGrid(), 2000);
      displayLabel("footer", labels.gameWinner);
    }
  }
})();
