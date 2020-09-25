export default class Position {
  // class global pour les position de toute les figures
  constructor(x, y, direction = '0') {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
  isEqual(pos) {
    if (this.x == pos.x && this.y == pos.y) {
      return true
    } else {
      return false
    }

  }
}
