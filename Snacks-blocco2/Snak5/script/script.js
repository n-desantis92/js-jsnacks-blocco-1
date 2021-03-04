// Crea due array che hanno un numero di elementi diversi.
var contenitore1 = ["1","2","3","4","5","6"];
var contenitore2 = ["1","2","3","4","5","6","7","8","9","10"];
// Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà tanti quanti l'altro.

for (var i = contenitore1.length; i < contenitore2.length; i++) {
  var numero = Math.floor(Math.random() * 10 + 1).toString();
  contenitore1.push(numero);
}

console.log(contenitore1);
