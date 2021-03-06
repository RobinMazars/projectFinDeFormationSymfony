console.log('class DomController load');
export default class DomController {
  // controlle la plupart des création,detection,supression d'element HTML
  constructor() {
    this.nbrSaveButton=9
    var div =this.creationSaveLoadButton()
    $("#sousSection").prepend(div)
    //this.creatAll()
    console.log('endDomController');
  }
  creationAnimationButton(){
    var div =this.creationDomElement('div','animationButton')
    var start=this.creationDomElement('button','start','Start')
    var stop=this.creationDomElement('button','stop','Stop')
    var oneStep=this.creationDomElement('button','oneStep','One Step')
    start.attr('type', 'button');
    stop.attr('type', 'button');
    oneStep.attr('type', 'button');
    div.append(start)
    div.append(stop)
    div.append(oneStep)
    return div
  }
  creationSaveLoadButton(){
    var loadSave=this.creationDomElement('div','loadSave')

    for (var i = 0; i < this.nbrSaveButton; i++) {
      var div=this.creationDomElement('div',null,null,'saveLoad-Buttons')
      var buttonSave = this.creationDomElement('button',null,'Save n°'+parseInt(i+1),'save')
      buttonSave.attr('type', 'button');
      buttonSave.attr('data-id', i+1);
      var buttonLoad = this.creationDomElement('button',null,'Load n°'+parseInt(i+1),'load')
      buttonLoad.attr('type', 'button');
      buttonLoad.attr('data-id', i+1);
      var buttonSupre = this.creationDomElement('button',null,'<i class="fas fa-trash-alt"></i>','supre')
      buttonSupre.attr('type', 'button');
      buttonSupre.attr('data-id', i+1);
      div.append(buttonSave)
      div.append(buttonLoad)
      div.append(buttonSupre)
      loadSave.append(div)
    }
    return loadSave
  }
  creationDomElement(type,id=null,html=null,classe=null){
    // fontion générale pour créer un element
    var element =$("<"+type+"></"+type+">")
    if (html!=null) {
      element.html(html)
    }
    if (id != null) {
      element.attr('id', id);
    }
    if (classe !=null) {
      element.addClass(classe)
    }
    return element
  }
}
