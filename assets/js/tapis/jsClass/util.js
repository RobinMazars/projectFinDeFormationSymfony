// fichier pour les fonctions utilitaires
// console.log("util.js");

export function refresh(element = "#frame") {
  $(element).html($(element).html());
}

export function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function findDigit(string) {
  const regex = /\d+/gm;;
  const str = string
  let m;
  var find;
  while ((m = regex.exec(str)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }
      m.forEach((match, groupIndex) => {
        find= match;
    });
  }
  return find
}
export function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
export function affTest() {
  // console.log('hello there');

}
