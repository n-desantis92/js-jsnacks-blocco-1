// Stampa le potenze di 2 fino a 1000.
// var stampa;
// for (var i = 1; i < 1000; i = i * 2) {
  //   console.log(i);
  // }

// oppure

var esponente = 0;

do {
  var potenza = Math.pow(2, esponente);
  console.log(potenza);

  esponente++;
} while (Math.pow(2, esponente) <= 1000 );
