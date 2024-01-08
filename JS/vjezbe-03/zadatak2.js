
// ослушкивач догађаја у засебној датотеци
document.addEventListener("DOMContentLoaded", function() {
    var forma = document.getElementById("forma");
    var poljaContainer = document.getElementById("poljaContainer");
    var brojacPolja = 1;

    // Dodajemo događaj "click" na dugme za dodavanje polja
    document.getElementById("dodajPolje").addEventListener("click", function() {
        var novoPolje = document.createElement("input");
        novoPolje.type = "text";
        novoPolje.name = "polje" + brojacPolja;
        novoPolje.placeholder = "Unesite tekst";

        poljaContainer.appendChild(novoPolje);
        brojacPolja++;
    });

    // Dodajemo događaj "submit" na formu
    forma.addEventListener("submit", function(event) {
        event.preventDefault(); // Sprječavamo podnošenje forme radi prikaza u konzoli

        // Prikazujemo unete vrednosti u konzoli
        var unetiPodaci = [];
        var polja = document.querySelectorAll("#poljaContainer input[type='text']");

        //polja[0].value = "844"; // √ ПРОЛАЗИ!
        polja[1].value = "844";   // Uncaught TypeError: polja[1] is undefined
        console.log("Broj unesenih polja:", polja.length);

        polja.forEach(function(elementX, index) {
            unetiPodaci.push("Polje " + (index + 1) + ": " + elementX.value);
        });

        console.log("Uneti podaci:", unetiPodaci);
    });
});