import DomController from './jsClass/DomController.class.js';
import Tapis from './jsClass/Tapis.class.js';
import Ore from './jsClass/Ore.class.js';
import Manipulator from './jsClass/Manipulator.class.js';
import Position from './jsClass/Position.class.js';


$(".sousMenusListe").hide()
$(".sousMenusListe").find(':first-child').css('border-radius', '10px 10px 0 0');
$(".sousMenusListe").find(':last-child').css('border-radius', '0 0 10px 10px');
$(".sousMenusListe").width(function () {
  var parent=$(this).parent();
  var paddingParentLeft=parseInt(parent.css('padding-left'));
  var paddingParentRight=parseInt(parent.css('padding-right'));
  var positionParentLeft=parent.offset();
  $(this).width(parent.width()-paddingParentRight-paddingParentLeft)
})
//bind event/////////////////////
$("nav ul li").hover(function() {
  if ($(window).width() > 780) {
    $(this).css('background', 'red');
    $(this).children().css('color', 'white');
  }
}, function() {
  $(this).css('background', '');
  $(this).children().css('color', '');
});
$("nav ul li.sousMenusTitle").hover(function() {
$(this).children(".sousMenusListe").show()
}, function() {
  $(this).children(".sousMenusListe").hide()
});
$(function(){
  var dom = new DomController()
  var listeClass = [Tapis, Ore];
  var manipulator = new Manipulator(listeClass);
  // var pos1 = new Position(0, 0, 0);
  // var pos2 = new Position(100, 100, 1);
  // var pos3 = new Position(150, 150, 0);
  // var pos5 = new Position(150, 150, 0);
  // var pos4 = new Position(450, 450);
  // var h = new Tapis(pos1);
  // var h2 = new Tapis(pos2,'left');
  // var h3 = new Ore(pos5);
  // var h4 = new Tapis(pos3, 'right');
  // manipulator.addObject(h);
  // manipulator.addObject(h2);
  // manipulator.addObject(h3);
  // manipulator.addObject(h4);
  manipulator.writeAll();
});
