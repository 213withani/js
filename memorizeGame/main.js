(function () {
  let totalNumberOfCells = 25;
  let cellsToHighlight = null;
  let footer = document.getElementById("footer");
  let count = 0;
  // let i = 0; 
  
  const gameTransition = {
    ready: "Ready",
    recall: "Recall"
  }

  function Game() {
    let allCellsPositions = [];

    footer.innerHTML = gameTransition.ready;

    allCellsPositions = createGrid();

    highlightCells(allCellsPositions);
    //if (count <= 3) {
      setTimeout(() => clearGrid(), 1000);

      footer.innerHTML = gameTransition.recall;
    //}
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
    
  }

  function allowUserToClickCells() {
    let cellToClear = null;

    for (let i = 0; i < totalNumberOfCells; i++) {
      
      cellToClear = document.getElementById(i);
      cellToClear.addEventListener('click', clickCorrectCell.bind(cellToClear));
    
    }
  }

  function clickCorrectCell() {
    const correctCell = isCorrectCell.bind(this);
    correctCell(i);
  }

  function disableCells() {
    let cellToClear = null;

    for (let j = 0; j < totalNumberOfCells; j++) {
      cellToClear = document.getElementById(j);
      cellToClear.removeEventListener("click", this.clickCorrectCell);
    }
  }

  function isCorrectCell(i) {
    const cellToHighlight = i.toString();
    for (let j = 0; j < cellsToHighlight.length; j++) {
      if (cellToHighlight === cellsToHighlight[j]) {
        this
          .classList
          .add("correct");
      }
    }
    
    if (!this.classList.contains("correct")) {
      this
        .classList
        .add("wrong");
      count++;
      console.log(count);
    }

    if(count > 3){
      disableCells()
    }
  }
})();
