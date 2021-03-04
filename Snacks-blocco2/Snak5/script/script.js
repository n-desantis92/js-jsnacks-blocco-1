// Crea due array che hanno un numero di elementi diversi.
var contenitore1 = ["1","2","3","4","5","6"];
var contenitore2 = ["1","2","3","4","5","6","7","8","9","10"];
// Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà tanti quanti l'altro.
var numero = 0;
// for (var i = contenitore1.length; i < contenitore2.length; i++) {
//   numero = Math.floor(Math.random() * 10 + 1).toString();
//   contenitore1.push(numero);
// }
//
// console.log(contenitore1);

// altrimenti se voglio prendere una stringa dall'array

// for (var i = contenitore1.length; i < contenitore2.length; i++) {
//   numero = Math.floor(Math.random() * (contenitore2.length));
//   console.log(numero + "numero random");
//   contenitore1.push(contenitore2[numero]);
//   console.log(contenitore2[numero] + " numero contenitore");
// }
//
// console.log(contenitore1);

if (contenitore1.length < contenitore2.length) {
  for (var i = contenitore1.length; i < contenitore2.length; i++) {
    numero = Math.floor(Math.random() * (contenitore2.length));
    console.log(numero + "numero random");
    contenitore1.push(contenitore2[numero]);
    console.log(contenitore2[numero] + " numero contenitore");
  }
}else {
  for (var i = contenitore2.length; i < contenitore1.length; i++) {
    numero = Math.floor(Math.random() * (contenitore1.length));
    console.log(numero + "numero random");
    contenitore1.push(contenitore1[numero]);
    console.log(contenitore1[numero] + " numero contenitore");
  }
}
console.log(contenitore2);
