import DomController from './jsClass/DomController.class.js';
import Tapis from './jsClass/Tapis.class.js';
import Ore from './jsClass/Ore.class.js';
import Manipulator from './jsClass/Manipulator.class.js';
import Position from './jsClass/Position.class.js';



// initialise les principals objects
$(function(){
  var dom = new DomController()
  var listeClass = [Tapis, Ore];
  var manipulator = new Manipulator(listeClass);
  manipulator.writeAll();
});
