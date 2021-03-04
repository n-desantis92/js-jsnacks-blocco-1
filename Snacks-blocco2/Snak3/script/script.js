/*Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati. */

// 1 definisco gli array
var nomi = ["nicolas", "franco", "pippo",];
var cognomi = ["secco", "storto", "luce"];
var invitati = [];
// 2 ciclo per 3 volte
for (var i = 1; i <= 3; i++) {
  // 3 creo indici random
  var indiceNomeRandom = Math.round(Math.random() * nomi.length);
  var indiceCognomeRandom = Math.round(Math.random() * cognomi.length);
  //  4 compongo il nome completo
  var nomeCompleto = nomi[indiceNomeRandom] + " " + cognomi[indiceCognomeRandom];
  // 5 aggiungo il nomeCompleto alla lista degli invitati
  invitati.push(nomeCompleto);
}
// stampo in console la lista degli invitati
 console.log(invitati);
