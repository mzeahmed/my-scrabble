export default class Tile {
  constructor (letter, points, notFreeRow, freeRow) {
    this.letter = letter;
    this.notFreeRow = notFreeRow;
    this.freeRow = freeRow;

    this.elem = this.createElem();
    this.targetRow = null;

    this.events();
  }

  createElem () {
    let elem = document.createElement('div');
    elem.classList.add('tile');

    let letter = document.createElement('span');
    letter.classList.add('letter');
    letter.innerText = this.letter;

    elem.appendChild(letter);

    return elem;
  }

  grab (mouseX, mouseY) {
    this.isDragging = true;
    if (this.targetRow) {
      this.freeRow(this.targetRow);
      this.targetRow = null;
    }

    this.elem.style.zIndex = 3;

    this.currentX = mouseX - this.size / 2;
    this.currentY = mouseY - this.size / 2;

    this.setTransition(true);
    this.setPosition(this.currentX, this.currentY, 1.2, 0);
  }

  move (mouseX, mouseY) {
    if (!this.isDragging) {
      return;
    }

    this.currentX = mouseX - this.size / 2;
    this.currentY = mouseY - this.size / 2;

    this.setTransition(false);
    this.setPosition(this.currentX, this.currentY, 1.2, 0);
  }

  release () {
    if (!this.isDragging) {
      return;
    }

    this.isDragging = false;

    this.elem.style.zIndex = 1;

    this.targetRow = this.notFreeRow(this.currentX, this.currentY, this.letter);
    this.setTransition(true);
    this.setPositionToTargetRow();

  }

  setPosition (x, y, scale, rotation) {
    this.elem.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`;
  }

  setTransition (state) {
    this.elem.style.transition = state ? 'transform 0.2s ease' : '';
    this.elem.getBoundingClientRect();
  }

  setSize (size) {
    this.size = size;
    if (size <= 40)
      this.elem.classList.add('small');
    else
      this.elem.classList.remove('small');
    this.elem.style.width = `${size - 4}px`;
    this.elem.style.height = `${size - 4}px`;
  }

  async setPositionToTargetRow () {
    let targetPos = this.targetRow.getBoundingClientRect();
    let rotation = this.targetRow.getAttribute('data-rotation');
    if (!rotation)
      rotation = 0;

    this.setPosition(targetPos.left, targetPos.top, 1, rotation);
    return new Promise(res => {
      setTimeout(res, 200);
    });
  }

  events () {
    this.elem.addEventListener('mousedown', (ev) => {
      this.grab(ev.clientX, ev.clientY);
    });
    document.body.addEventListener('mousemove', ((ev) => {
      this.move(ev.clientX, ev.clientY);
    }));
    document.body.addEventListener('mouseup', this.release.bind(this));

    this.elem.addEventListener('touchstart', e => {this.grab(e.touches[0].clientX, e.touches[0].clientY);});
    document.body.addEventListener('touchmove', e => {
      e.preventDefault();
      this.move(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    document.body.addEventListener('touchend', this.release.bind(this));
  }
}