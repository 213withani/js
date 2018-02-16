(function() {
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
    over: "Game Over",
    winner: "Winner"
  };

  function Game() {
    let allCellsCreatedInGrid = [];
    //   cellsToHighlight = null;
    header.innerHTML = "Memorize Game: You can only get 4 wrong answers.";

    allCellsCreatedInGrid = createGridWithId();
    footer.innerHTML = gameTransition.ready;
    highlightActiveCells(allCellsCreatedInGrid);
    setTimeout(() => clearStatusInGrid("active"), 1000);
    allowUserToClickCells();
  }

  startGamePlay();

  function startGamePlay() {
    const letUserPlay = document.getElementById("playBtn");
    letUserPlay.addEventListener("click", function() {
      Game();
    });
  }

  function createGridWithId() {
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

    cellsToHighlight = _.sampleSize(allCellsPositions, 6);

    for (let k = 0; k < cellsToHighlight.length; k++) {
      cellToHighlight = document.getElementById(cellsToHighlight[k]);
      cellToHighlight.classList.add("active");
    }
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

    footer.innerHTML = gameTransition.recall;
  }

  function deleteGrid() {
    correctChoice = 0;
    wrongChoice = 0;
    footer.innerHTML = "";
    
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
    for (let j = 0; j < cellsToHighlight.length; j++) {
      if (cellToHighlight === cellsToHighlight[j]) {
        this.classList.add("correct");
        correctChoice++;
      }
    }
    if (!this.classList.contains("correct")) {
      this.classList.add("wrong");
      wrongChoice++;
    }
    if (wrongChoice > 3) {
      // correctChoice=0;
      // wrongChoice=0;
      disableCells();
      setTimeout(() => deleteGrid(), 2000);
      footer.innerHTML = gameTransition.over;
    }
    if (correctChoice === 6) {
      // correctChoice=0;
      // wrongChoice=0;
      disableCells();
      setTimeout(() => deleteGrid(), 2000);
      footer.innerHTML = gameTransition.winner;
    }
  }
})();
