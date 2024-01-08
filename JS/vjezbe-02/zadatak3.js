
// ослушкивач догађаја у засебној датотеци
document.addEventListener("DOMContentLoaded", function() {
    
    var mojeDugme = document.getElementById("mojeDugme");
    var brojKlikova = 0;

    // Dodajemo događaj "click" na dugme
    mojeDugme.addEventListener("click", function() {
        brojKlikova++;

        // Ažuriramo tekst u paragrafu da prikaže trenutni broj klikova
        var paragraf = document.getElementById("brojKlikova");
        paragraf.textContent = "Broj klikova: " + brojKlikova;
    });
});