const numberCells = document.querySelector("#numberCells");
const createButton = document.querySelector("button#create");
const grid = document.querySelector("#grid");

const defaultCells = 16;
numberCells.value = defaultCells;

//handle the click
const handleCreateClick = () => {
  //make sure numberCells is a sensible value
  //create the grid again
};

// create the canvas -> a grid of numCells x numCells
// i.e. a total of numCells^2 cells
const createGrid = function (numCells) {
  const cells = []; //array of nodes

  // create the array

  //do we need to manually create IDs?

  //probably ought to

  grid.replaceChildren(cells);
};

const handleCellSelect = function (e) {
  // determine the target
  // set the background color of the cell
};
