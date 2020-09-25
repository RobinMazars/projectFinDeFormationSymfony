$("#playBtn").mousedown(function(event) {
  console.log("clic");
  $("#piece").toggleClass('move')
  setTimeout(function (){
    $("#piece").removeClass('move')
    console.log("remove");
}, 1500);
});
$("#playBtn2").mousedown(function(event) {
  console.log("clic2");
  $("#pieceFace2").toggleClass('move2')
  $("#piecePile2").toggleClass('move2b')
  setTimeout(function (){
    $("#pieceFace2").removeClass('move2')
    $("#piecePile2").removeClass('move2b')
    console.log("remove2");
}, 3000);
});
