// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var utente = prompt(inserisci un numero a 4 cifre);
console.log(utente[])
var risultato = 0;
for (var i = 0; i <= utente.length; i++) {
  risultato += parseInt(utente[i]);
}
console.log(risultato);
