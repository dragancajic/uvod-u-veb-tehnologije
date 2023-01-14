// Pon 09 Jan 2023 21:25:03


// 04 Programski jezik JavaScript | UVIT
// https://matfuvit.github.io/UVIT/vezbe/knjiga/Poglavlja/JS/
// ----------------------------------------------------------

// Zadatak 6 -> `šablon-literali (engl. template literals)`:

// Naredne 3 linije koda se efektivno mogu posmatrati kao jedna linija koda,
// pri čemu će dati tekst u konzoli biti zaista ispisan u više linija.
const dragan = "Dragan";

console.log(`Korišćenjem šablon-literala
                tekst se može prelamati u više linija
što nije moguće uraditi korišćenjem jednostrukih ili dvostrukih navodnika`);
//console.log('\n');
console.log(`Vrednost izraza 2 + 2 je ${2 + 2}`); // 'Vrednost izraza 2 + 2 je 4'
console.log('\n');

console.log(`Korišćenjem šablon-literala
                tekst se može prelamati u više linija
što nije moguće uraditi korišćenjem jednostrukih ili dvostrukih navodnika
\t> bez korišćenja sekvenci za izbjegavanje (engl. escape sequences) :-) ${dragan}`);
console.log('---------------------------------------------------~~~~-');
console.log("Korišćenjem šablon-literala\n" +
"\t\ttekst se može prelamati u više linija\n" +
"što nije moguće uraditi korišćenjem jednostrukih ili dvostrukih navodnika\n" +
"\t> bez korišćenja sekvenci za izbjegavanje (engl. escape sequences) :-) " + dragan);
console.log('---------------------------------------------------~~~~-');
console.log('Korišćenjem šablon-literala\n' +
'\t\ttekst se može prelamati u više linija\n' +
'što nije moguće uraditi korišćenjem jednostrukih ili dvostrukih navodnika\n' +
'\t> bez korišćenja sekvenci za izbjegavanje (engl. escape sequences) :-) ' + dragan);
