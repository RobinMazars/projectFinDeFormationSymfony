import Pen from "./pen.class.js"
export default class Canvas {
  // class qui controlle dans quelle mode on se trouve et trace les traits
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.pen = new Pen()
  }
  drawLine(event) {

  }
  eraserOn(){
    // mode effacement
    this.ctx.globalCompositeOperation = 'destination-out';
    this.pen.width = 20

  }
  eraserOff(){
    // mode ecriture
    this.ctx.globalCompositeOperation = 'source-over';
    this.pen.width = 5
  }
  clearAll(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  startDrawLine(event) {
    this.ctx.beginPath();
    this.ctx.lineWidth = this.pen.getWidth();
    this.ctx.strokeStyle = this.pen.getColor();
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    var pos = this.pen.getPos(event, this.canvas);
    console.log(pos);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke()
  }
  continueDrawLine(event) {
    var pos = this.pen.getPos(event,this.canvas);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke()

  }
  endDrawLine() {
    this.ctx.closePath()
  }
}
