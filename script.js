let movesNum;
let movescell = document.getElementById("movesnum");

let tile1 = document.getElementsByClassName("Tile Tile1")[0];
let tile2 = document.getElementsByClassName("Tile Tile2")[0];
let tile3 = document.getElementsByClassName("Tile Tile3")[0];
let tile4 = document.getElementsByClassName("Tile Tile4")[0];
let tile5 = document.getElementsByClassName("Tile Tile5")[0];
let tile6 = document.getElementsByClassName("Tile Tile6")[0];
let tile7 = document.getElementsByClassName("Tile Tile7")[0];
let tile8 = document.getElementsByClassName("Tile Tile8")[0];

let emptyRow, emptyCol;

let tiles = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8];

function setInitialPositions() {
    movesNum = 0;
    movescell.innerHTML = movesNum;
    [emptyRow, emptyCol] = [3, 3];
    tile1.style.gridRow = 2;
    tile1.style.gridColumn = 2;
    tile2.style.gridRow = 2;
    tile2.style.gridColumn = 1;
    tile3.style.gridRow = 1;
    tile3.style.gridColumn = 1;
    tile4.style.gridRow = 2;
    tile4.style.gridColumn = 3;
    tile5.style.gridRow = 3;
    tile5.style.gridColumn = 1;
    tile6.style.gridRow = 1;
    tile6.style.gridColumn = 2;
    tile7.style.gridRow = 1;
    tile7.style.gridColumn = 3;
    tile8.style.gridRow = 3;
    tile8.style.gridColumn = 2;
}

function checkWin() {
    const isPuzzleSolved =
        getPositionTiles() !== "1112132333323121" ? false : true;
    if (isPuzzleSolved) alert("¡Has ganado!");
}

//------------------------------------------------------
function solvePuzzle() {
    movesNum = 0;
    movescell.innerHTML = movesNum;
    setInitialPositions();
    const correctSequenceByInnerHtmlTiles = "47632176321785786456".split("");
    let currentIndex = 0;
    const solveInterval = setInterval(() => {
        const char = correctSequenceByInnerHtmlTiles[currentIndex];
        tiles.forEach((tile) => tile.innerHTML === char ? tile.click() : null);
        currentIndex++;
        if (currentIndex >= correctSequenceByInnerHtmlTiles.length) {
            clearInterval(solveInterval);
        }
    }, 200);
}
//------------------------------------------------------

function moveTile() {
    const tileRow = parseInt(this.style.gridRow.charAt(0));
    const tileCol = parseInt(this.style.gridColumn.charAt(0));
    const isHorizontal = tileCol === emptyCol;
    const isVertical = tileRow === emptyRow;
    const isAdjacent = (empty, tile) => Math.abs(empty - tile) === 1;
    const canMoveHorizontaly = isAdjacent(emptyRow, tileRow);
    const canMoveVerticaly = isAdjacent(emptyCol, tileCol);
    if (
        !(isHorizontal && canMoveHorizontaly) &&
        !(isVertical && canMoveVerticaly)
    )
        return;
    this.style.gridRow = isHorizontal
        ? emptyRow.toString()
        : this.style.gridRow;
    this.style.gridColumn = isVertical
        ? emptyCol.toString()
        : this.style.gridColumn;
    [emptyRow, emptyCol] = [tileRow, tileCol];
    console.log(getPositionTiles());
    movesNum++;
    movescell.innerHTML = movesNum;
    window.setTimeout(checkWin, 100);
}

function getPositionTiles() {
    let position = "";
    tiles.forEach((tile) => {
        position += tile.style.gridRow.charAt(0);
        position += tile.style.gridColumn.charAt(0);
    });
    return position;
}

tile1.addEventListener("click", moveTile);
tile2.addEventListener("click", moveTile);
tile3.addEventListener("click", moveTile);
tile4.addEventListener("click", moveTile);
tile5.addEventListener("click", moveTile);
tile6.addEventListener("click", moveTile);
tile7.addEventListener("click", moveTile);
tile8.addEventListener("click", moveTile);

document.getElementById("newgame").onclick = setInitialPositions;
document.getElementById("solveit").onclick = solvePuzzle;

setInitialPositions();
