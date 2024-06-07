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
grid.addEventListener("mouseover", handleCellSelect);

function handleCreateClick() {
  //make sure numberCells is a sensible value
  const userCells = Math.max(Math.min(Number(numberCells.value), 99), 1);
  numberCells.value = userCells;
  createGrid(userCells);
}

// create the canvas -> a grid of numCells x numCells
function createGrid(numCells) {
  grid.replaceChildren();
  let newRow, newCell;

  // create the array
  for (let i = 0; i < numCells; i++) {
    newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < numCells; j++) {
      newCell = document.createElement("div");
      newCell.classList.add("cell");
      newRow.appendChild(newCell);
    }
    grid.appendChild(newRow);
  }

  //do we need to manually create IDs?

  //probably ought to
}

function handleCellSelect(e) {
  //make sure we're setting an individual cell
  if (e.target.classList.contains("cell")) {
    //random bgcolor if not already set
    if (!e.target.style.backgroundColor) {
      let r, g, b;
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }

    //opacity
    //if opacity is set, reduce by 0.1 - i.e. 10%
    if (e.target.style.opacity) {
      e.target.style.opacity = Math.max(
        Number(e.target.style.opacity) - 0.1,
        0
      );
    } else {
      e.target.style.opacity = 1.0;
    }
    console.log(e.target.style.opacity);
  }
}
