//init
import Canvas from "./jsClass/canvas.class.js"
var canvas = new Canvas();
//initBind
$("#canvas").css('background', 'steelblue');
$("#canvas").mousedown(function(event) {
  mouseDown(event);
});
$("#color").change(function(event) {
  console.log($(this).val())
  canvas.pen.setColor($(this).val())
});
$("#gomme").click(eraserOn);

function eraserOn() {
  // action quand on entre en mode effacement
  $("#gomme").unbind('click')
  $("#gomme").click(eraserOff);
  $('#gomme').addClass('selected')
  canvas.eraserOn();
}

function eraserOff() {
  // action quand on sort du mode effacement
  $("#gomme").unbind('click')
  $("#gomme").click(eraserOn);
  $('#gomme').removeClass('selected')
  canvas.eraserOff();
}
$("#btnErase").click(function(event) {
  canvas.clearAll();
});

function mouseDown(e) {
  // action quand on entre en mode ecriture
  console.log('mousedown');
  canvas.startDrawLine(e)
  $("#canvas").mousemove(function(event) {
    canvas.continueDrawLine(event)
    $("#canvas").unbind('mousedown');
  });
  $("#canvas").mouseup(function(event) {
    mouseUp(event);
  });
  $("#canvas").mouseout(function(event) {
    mouseUp(event);
  });

}

function mouseUp(e) {
  // action quand on sort du mode ecriture
  console.log('mouseup');
  canvas.endDrawLine()
  $("#canvas").unbind('mousemove');
  $("#canvas").unbind()
  $("#canvas").mousedown(function(event) {
    $("#canvas").unbind()
    mouseDown(event);
  });

}
