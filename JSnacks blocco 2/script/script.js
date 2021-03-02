// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var utente = prompt("inserisci parola1");
var utente2 = prompt("inserisci parola2");
var corta;

if (utente.length < utente2.length) {
  console.log(utente)
}
else if (utente.length > utente2.length) {
  console.log(utente2)
}
else {
  console.log("sono uguali")
}

var lunga;

if (utente.length > utente2.length) {
  console.log(utente)
}
else if (utente.length < utente2.length){
  console.log(utente2)
}
else {
  console.log("sono uguali")
}
