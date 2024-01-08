
// ослушкивач догађаја у засебној датотеци
document.addEventListener("DOMContentLoaded", function() {
    // Čekamo da se DOM učita pre nego što dodamo događaj

    // Pronalazimo paragraf po ID-u
    var paragraf = document.getElementById("paragraf");

    // Dodajemo događaj na paragraf
    paragraf.addEventListener("click", function() {
        alert("Kliknuli ste na paragraf!");
    });
});