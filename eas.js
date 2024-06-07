// Default values
const defaultCells = 4;

//
const numberCells = document.querySelector("#numberCells");
const createButton = document.querySelector("button#create");
const grid = document.querySelector("#grid");

//init code
numberCells.value = defaultCells;
createGrid(defaultCells);
createButton.addEventListener("click", handleCreateClick);

//handle the click
function handleCreateClick() {
  //make sure numberCells is a sensible value
  //TODO
  const userCells = numberCells.value;

  //create the grid again
  createGrid(userCells);
}

// create the canvas -> a grid of numCells x numCells
// i.e. a total of numCells^2 cells
function createGrid(numCells) {
  grid.replaceChildren();
  const cells = []; //array of nodes
  let newRow, newCell;

  // create the array
  for (let i = 0; i < numCells; i++) {
    newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < numCells; j++) {
      newCell = document.createElement("div");
      //newCell.textContent = `${i}x${j}`;
      newRow.appendChild(newCell);
    }
    grid.appendChild(newRow);
  }

  //do we need to manually create IDs?

  //probably ought to
}

const handleCellSelect = function (e) {
  // determine the target
  // set the background color of the cell
};
