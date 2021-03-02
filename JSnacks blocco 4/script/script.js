/*In un array sono contenuti i nomi degli invitati alla festa del
grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */

var utente = prompt("inserisci il tuo nome");
var autorizzazione = false;

var invitati = ["luca","marco","paolo"];
for (var i = 0; i < invitati.length; i++) {
  if(invitati[i].tolowerCase() == utente.tolowerCase() ){
    autorizzazione = true;
  }
}

if(autorizzazione) {
  alert("puoi accedere");
}
else{
  alert("non puoi accedere!");
}
