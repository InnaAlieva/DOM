class GameBoard {
  constructor(boardSize, boardElementId = "board") {
    this.boardSize = boardSize ** 2;
    this.previousIndexCell = -1;
    this.currentIndexCell = 0;
    this.boardElementId = boardElementId;
    this.imageElement = document.createElement("img");
    this.imageElement.src = "./img/goblin.png";
    this.imageElement.alt = "Goblin";
  }

  drawBoard() {
    const board = document.getElementById(this.boardElementId);
    if (!board) {
      throw new Error(`Element with id ${this.boardElementId} not found`);
    }

    board.innerHTML = "";

    for (let i = 0; i < this.boardSize; i += 1) {
      const itemBoard = document.createElement("div");
      itemBoard.className = "cell";
      itemBoard.id = `cell${i}`;
      board.append(itemBoard);
    }

    this.randomImg();
  }

  randomImg() {
    setInterval(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.boardSize);
      } while (newIndex === this.previousIndexCell);

      const previousCell = document.getElementById(
        `cell${this.previousIndexCell}`,
      );
      if (previousCell) {
        previousCell.innerHTML = "";
      }

      const currentCell = document.getElementById(`cell${newIndex}`);
      if (currentCell) {
        currentCell.append(this.imageElement.cloneNode());
      }

      this.previousIndexCell = newIndex;
    }, 1000);
  }
}

const gameBoard = new GameBoard(4);
gameBoard.drawBoard();
