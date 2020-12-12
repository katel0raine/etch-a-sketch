const gridContainer = document.querySelector("#grid-container");
const toolsContainer = document.querySelector("#tools-container");
const tools = document.querySelectorAll("button");
const clearButton = document.querySelector("#clear");

let tilesPerSide = 16;
let currentTool = "black";

tools.forEach(tool => tool.addEventListener("click", changeTool));
clearButton.addEventListener("click", clearGrid);

createGrid(tilesPerSide);

function createGrid(tilesPerSide) {
  gridContainer.style.gridTemplateColumns = `repeat(${tilesPerSide}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${tilesPerSide}, 1fr)`;
  let gridArea = tilesPerSide * tilesPerSide;
  for (let i = 1; i <= gridArea; i++) {
    let tile = document.createElement("div");
    gridContainer.appendChild(tile);
  }
  let gridTiles = gridContainer.querySelectorAll("div");
  gridTiles.forEach(tile => tile.addEventListener("mouseover", colorTiles));
}

function changeTool() {
  currentTool = this.id;
}

function colorTiles() {
  switch (currentTool) {
    case "rainbow":
    event.target.style.backgroundColor = createRandomColor();
    break;
    case "eraser":
    event.target.removeAttribute("style");
    break;
    default:
    event.target.style.backgroundColor = "black";
    break;
  }
}

function createRandomColor() {
  return "#" + (Math.random().toString(16) + "000000").substring(2,8);
}

function clearGrid() {
  let drawnTiles = gridContainer.querySelectorAll("div");
  drawnTiles.forEach((tile) => {
    tile.removeAttribute("style");
  });
  currentTool = "black";
  createNewGrid();
}

function createNewGrid() {
  let newTilesPerSide = prompt("How wide would you like the new grid? (Max: 100)");
  if ((newTilesPerSide > 0) && (newTilesPerSide <= 100)) {
    createGrid(newTilesPerSide);
  }
}
