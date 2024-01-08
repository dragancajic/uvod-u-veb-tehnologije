
// ослушкивач догађаја у засебној датотеци
document.addEventListener("DOMContentLoaded", function() {
    var forma = document.getElementById("forma");
    var unosTeksta = document.getElementById("unosTeksta");

    forma.addEventListener("submit", function(event) {
        event.preventDefault(); // Sprječavamo podnošenje forme radi prikaza u konzoli

        // Proveravamo da li je polje za unos teksta prazno
        if (unosTeksta.value.trim() === "") {
            //alert("Polje za unos teksta ne sme biti prazno!");
            document.getElementById("kartica1").style.display = "block";
        } else {
            // Ako nije prazno, prikazujemo uneti tekst u konzoli
            console.log("Uneti tekst:", unosTeksta.value.trim());
        }
    });
});