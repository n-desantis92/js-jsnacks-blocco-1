// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.


do {
  var scelta = parseInt(prompt("inserisci un numero da 1 a 5"));
} while (isNaN(scelta) );
for (var i = 0; i <= 10; i++) {
    console.log(math.pow(scelta, 3));
}
