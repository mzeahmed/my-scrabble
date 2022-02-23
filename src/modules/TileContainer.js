import Tile from './Tile';

export default class TileContainer {
  constructor () {
    this.tilesContainer = document.getElementById('tiles');
    this.letters = document.querySelector('#tile_container > #letters');
    this.rows = Array.from(document.querySelectorAll('#tile_container .row')).reverse();

    /**
     * Nombre de pointList par lettre
     *
     * @type {{}}
     */
    this.pointList = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 6,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10
    };

    /**
     * Lettres disponibles
     * @type {string[]}
     */
    this.availableLetters = [
      'C',
      'E',
      'H',
      'L',
      'L',
      'O',
      'O',
      'P',
      'F',
      'E',
      'U',
      'N',
      'I',
      'E',
      'K',
      'A',
      'E',
      'C',
      'O',
      'E',
      'J',
      'M',
      'Q',
      'A',
      'Z',
      'E',
      'W',
      'B',
      'G'
    ];

    this.givenLetters = 0;
  }

  /**
   * @param notFreeRow
   * @param freeRow
   * @returns {Tile|null}
   */
  giveTile (notFreeRow, freeRow) {
    if (this.givenLetters >= this.availableLetters.length) {
      console.log('Plus de lettres disponibles');

      return null;
    }

    let targetRow = this.getNextFreeRow();
    if (!targetRow) {
      console.log('Case Occupée');

      return null;
    }

    this.letters.classList.remove('created_letters_container');
    let lettersContainerPosition = this.letters.getBoundingClientRect();
    this.letters.classList.add('created_letters_container');

    let letter = this.availableLetters[this.givenLetters];
    targetRow.setAttribute('data-letter', letter);
    targetRow.setAttribute('data-rotation', (Math.random() - 0.5) * 20);

    let tile = new Tile(letter, this.pointList[letter], notFreeRow, freeRow);
    tile.targetRow = targetRow;
    tile.setPosition(lettersContainerPosition.left, lettersContainerPosition.top, 0, 0);
    this.tilesContainer.appendChild(tile.elem);
    tile.setTransition(true);
    tile.setPositionToTargetRow();
    this.givenLetters++;

    return tile;
  }

  /**
   * Recuperation des rangées disponible
   */
  getNextFreeRow () {
    for (let row of this.rows) {
      if (!row.hasAttribute('data-letter')) {
        return row;
      }
    }

    return null;
  }

  setRowSize (size) {
    for (let field of this.rows) {
      field.style.width = `${size}px`;
      field.style.height = `${size}px`;
    }
  }
}