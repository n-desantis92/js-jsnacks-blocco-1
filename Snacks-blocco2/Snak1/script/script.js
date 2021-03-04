/* Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/

 var somma = 0;

// for (var i = 0; i < 5; i++) {
//  var utente = parseInt(prompt("inserisci un numero"));
//  console.log(utente);
//  somma = somma + utente;
// }
//
// console.log(somma);


// var i = 1;
// while (i <= 5) {
//   var utente = parseInt(prompt("inserisci un numero"));
//   somma += utente
//   i++
// }
// console.log(somma);


var i = 1;
varnumero;
while (i <= 5) {
  do {
    numero = parseInt(prompt("inserisci il " + i +"°  numero"));
  } while (isNaN(numero) );

  somma += numero;
  i++
}
console.log(somma);
