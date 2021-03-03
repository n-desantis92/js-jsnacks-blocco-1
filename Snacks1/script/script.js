// L’utente inserisce due numeri in successione, con due prompt.

var utente = parseInt(prompt("inserisci il primo numero"));
var utente2 = parseInt(prompt("inserisci il secondo numero"));
var risultatoM;
// Il software stampa il maggiore.

if (utente > utente2) {
  risultatoM = console.log(utente)
}
else if (utente == utente2) {
  risultatoM = console.log("pareggio")
}
else {
  risultatoM = console.log(utente2)
}

document.getElementById('risultato').innerHTML = risultatoM;
