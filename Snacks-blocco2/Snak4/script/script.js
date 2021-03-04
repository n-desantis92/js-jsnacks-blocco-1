// crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var numeri = [1,2,3,4,5,6,7,8,9,10];
var somma = 0;
for (var i = 0; i <= numeri.length; i++) {
  if (numeri[i] % 2 == 1) {
    somma += numeri[i];
  }
}
console.log(somma);
