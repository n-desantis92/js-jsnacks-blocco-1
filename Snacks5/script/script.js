/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.*/

var contenitore = [];
for (var i = 1; i <= 6; i++) {
  var numero = parseInt(prompt("inserisci un numero"));
  if (!isNaN(numero) && numero % 2 == 1) {
    contenitore.push(numero);
  }
}

console.log(contenitore);
