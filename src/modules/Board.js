export default class Board {
  constructor () {
    this.elem = document.getElementById('board_container');
    this.rowLength = 15;
    this.boardInit();
    this.boardRender();
  }
  
  boardInit () {
    this.fields = [];
    let fieldNum = Math.pow(this.rowLength, 2);

    // Création des rangées
    for (let i = 0; i < fieldNum; i++) {
      let div = document.createElement('div');
      div.classList.add('row');
      this.elem.appendChild(div);
      this.fields.push(div);
    }

    document.querySelector('body > div > div:nth-child(113)').classList.add('center-row');
  }

  boardRender () {
    this.elem.style.width = null;
    this.elem.style.height = null;

    /**
     * @see https://developer.mozilla.org/fr/docs/Web/API/Element/getBoundingClientRect
     * @type {DOMRect}
     */
    let rowDimensions = this.elem.getBoundingClientRect();

    if (rowDimensions.width > rowDimensions.height) {
      this.elem.style.width = `${rowDimensions.height}px`;
    } else {
      this.elem.style.height = `${rowDimensions.width}px`;
    }

    this.rowSize = this.fields[0].getBoundingClientRect().width;
  }
}