/**
 * @author: Драган Ћајић
 * @datetime: 9:40 AM Thursday, September 07, 2023
 * @modified: 9:41 AM Thursday, September 07, 2023
 * @subject: Рад с датумом и временом у JavaScript-у
 * @description: Predstaviti trenutni datum i vrijeme korisniku.
 */

// ispis vremena na pocetku stranice by Драган Ћајић ;-)
datum_vrijeme = new Date();

// raspolozive metode nad objektom Date klase `Date`:
// new Date().getDay() // Gets the day of the week, using local time.
// new Date().getDate()
// new Date().getMonth()
// new Date().getFullYear()
// new Date().getHours()
// new Date().getMinutes()
// new Date().getSeconds()
console.log(datum_vrijeme);

// *** promjenljive koje predstavljaju datum ***
// ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
// dan u sedmici je predstavljen brojem od 0 do 6 [Ned-Pon-...-Sub]
let danUSedmici = ""; // ipak inicijalizuj promjenljivu, pa makar i na prazan string! ;-)

switch (datum_vrijeme.getDay()) {
	case 0:
		danUSedmici = "Недеља";
		break;
	case 1:
		danUSedmici = "Понедељак";
		break;
	case 2:
		danUSedmici = "Уторак";
		break;
	case 3:
		danUSedmici = "Сриједа";
		break;
	case 4:
		danUSedmici = "Четвртак";
		break;
	case 5:
		danUSedmici = "Петак";
		break;
	case 6:
		danUSedmici = "Субота";
		break;
	default:
		danUSedmici = "НЕПОЗНАТО!";
		break;
}
document.getElementById("dan_u_sedmici").innerHTML = danUSedmici;

const danUMjesecu = datum_vrijeme.getDate();
document.getElementById("dan_u_mjesecu").innerHTML = danUMjesecu;

const mjesecUGodini = datum_vrijeme.getMonth(); // mjeseci idu od 0-11 [Jan-Dec]
document.getElementById("mjesec_u_godini").innerHTML =  mjesecUGodini + 1;

const godinaPunZapis = datum_vrijeme.getFullYear();
document.getElementById("godina").innerHTML = godinaPunZapis;

// ispisi promjenljive koje se ticu datuma
console.log(danUSedmici, danUMjesecu, mjesecUGodini, godinaPunZapis);

document.getElementById("sati").innerHTML = datum_vrijeme.getHours();
document.getElementById("minute").innerHTML = datum_vrijeme.getMinutes();
document.getElementById("sekunde").innerHTML = datum_vrijeme.getSeconds();
