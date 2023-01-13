// Pon 09 Jan 2023 21:25:03


// 04 Programski jezik JavaScript | UVIT
// https://matfuvit.github.io/UVIT/vezbe/knjiga/Poglavlja/JS/
// ----------------------------------------------------------

// Zadatak 6:

const neuspesna_konverzija_1 = Number.parseInt('jedan');
const neuspesna_konverzija_2 = Number.parseInt('dva');

console.log('Vrednost neuspesne konverzije 1 je ' + neuspesna_konverzija_1);
console.log('Vrednost neuspesne konverzije 2 je ' + neuspesna_konverzija_2);

console.log(
  'Da li dve NaN vrednosti mogu biti jednake?',
  neuspesna_konverzija_1 == neuspesna_konverzija_2
);

console.log(
  'Provera da li je vrednost NaN:',
  Number.isNaN(neuspesna_konverzija_1)
);
/*
Vrednost neuspesne konverzije 1 je NaN
Vrednost neuspesne konverzije 2 je NaN
Da li dve NaN vrednosti mogu biti jednake? false
Provera da li je vrednost NaN: true
*/
