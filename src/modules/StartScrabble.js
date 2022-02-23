import TileContainer from './TileContainer';
import Board from './Board';

export default class StartScrabble {
  constructor () {
    this.board = new Board();
    this.tileContiner = new TileContainer();
    this.tiles = [];
    this.displayPoint = document.getElementById('points');
    this.start();
    window.addEventListener('resize', this.render.bind(this));
  }

  async start () {
    this.render();
    for (let i = 0; i < this.tileContiner.rows.length; i++) {
      await this.giveTile();
    }
  }

  async giveTile () {
    let tile = this.tileContiner.giveTile(this.notFreeRow.bind(this), this.freeRow.bind(this));
    if (tile) {
      tile.setSize(this.board.rowSize);
      this.tiles.push(tile);
    }

    /**
     * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise
     */
    return new Promise((response) => {
      setTimeout(response, 300);
    });
  }

  notFreeRow (mouseX, mouseY, letter) {
    let rows = [...this.board.fields, ...this.tileContiner.rows];
    let freeRows = rows.filter(field => {
      return !field.getAttribute('data-letter');
    });

    freeRows.sort((a, b) => {
      let aPos = a.getBoundingClientRect();
      let bPos = b.getBoundingClientRect();

      let aDistance = this.getDistance(aPos.left, mouseX, aPos.top, mouseY);
      let bDistance = this.getDistance(bPos.left, mouseX, bPos.top, mouseY);
      return aDistance - bDistance;
    });

    let targetRow = freeRows[0];
    targetRow.setAttribute('data-letter', letter);
    this.calculatePoints();
    this.giveTile();

    return targetRow;
  }

  freeRow (row) {
    row.removeAttribute('data-letter');
    this.calculatePoints();
  }

  calculatePoints () {
    let words = this.board.getWords();
    let points = 0;
    for (let word of words) {
      for (let letter of word) {
        points += this.tileContiner.pointList[letter];
      }
    }
    this.displayPoint.textContent = points;
  }

  getDistance (x1, x2, y1, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
  }

  render () {
    this.board.boardRender();
    this.tileContiner.setRowSize(this.board.rowSize);
    for (let tile of this.tiles) {
      tile.setTransition(false);
      tile.setSize(this.board.rowSize);
      tile.setPositionToTargetRow();
    }
  }
}