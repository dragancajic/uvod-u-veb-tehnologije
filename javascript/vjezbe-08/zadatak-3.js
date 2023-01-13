// Pet 06 Jan 2023 00:09:26


// 04 Programski jezik JavaScript | UVIT
// https://matfuvit.github.io/UVIT/vezbe/knjiga/Poglavlja/JS/
// ----------------------------------------------------------

// Zadatak 3:

const prva_rec = 'Ovo';
const druga_rec = 'je';
const treca_rec = 'recenica';

// a
const cela_recenica = prva_rec + ' ' + druga_rec + ' ' + treca_rec + '.';
console.log(cela_recenica);

// b
const broj_karaktera = cela_recenica.length;
console.log('Broj karaktera u recenici je', broj_karaktera);

// c
let pozicija = cela_recenica.indexOf('recenica');
console.log('Pozicija niske "recenica" u recenici je:', pozicija);
pozicija = cela_recenica.indexOf('nepostojeca niska');
console.log('Pozicija niske "nepostojeca niska" u recenici je:', pozicija);

// d
const podniska = cela_recenica.slice(7, cela_recenica.length);
console.log('Podniska recenice od indeksa 7 do kraja niske:', podniska);
// Pogledati razlike izmedju slice, substr i substring za domaci

// e
const izmenjena_recenica = cela_recenica.replace(
  'recenica',
  'nesto duza recenica'
);
console.log(izmenjena_recenica);

// f
const sva_velika_slova = cela_recenica.toUpperCase();
console.log(sva_velika_slova);
const sva_mala_slova = cela_recenica.toLowerCase();
console.log(sva_mala_slova);

// g
const recenica_sa_vodecim_belinama =
  '  \n  \t    \n  \t\t\t   ' + cela_recenica + '   \n\n';
console.log('Recenica sa vodecim belinama:', recenica_sa_vodecim_belinama);
const osisana_recenica = recenica_sa_vodecim_belinama.trim();
console.log('Osisana recenica:', osisana_recenica);

// h
const prvi_karakter = cela_recenica.charAt(0);
const poslednji_karakter = cela_recenica.charAt(cela_recenica.length - 1);
console.log(
  'Prvi karakter je "' +
    prvi_karakter +
    '", a poslednji karakter je "' +
    poslednji_karakter +
    '"'
);
/*
Ovo je recenica.
Broj karaktera u recenici je 16
Pozicija niske "recenica" u recenici je: 7
Pozicija niske "nepostojeca niska" u recenici je: -1
Podniska recenice od indeksa 7 do kraja niske: recenica.
Ovo je nesto duza recenica.
OVO JE RECENICA.
ovo je recenica.
Recenica sa vodecim belinama:
    
             Ovo je recenica.


Osisana recenica: Ovo je recenica.
Prvi karakter je "O", a poslednji karakter je "."
*/
