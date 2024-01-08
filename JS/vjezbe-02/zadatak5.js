
// ослушкивач догађаја у засебној датотеци
document.addEventListener("DOMContentLoaded", function() {
    var mojDiv = document.getElementById("mojDiv");

    // Dodajemo događaj "mousemove" na dokument -> `document` √
    document.addEventListener("mousemove", function(event) {
        // Čuvamo trenutne X i Y koordinate miša
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        // Ažuriramo tekst u div-u sa trenutnim koordinatama miša
        mojDiv.textContent = "Pozicija miša: " + mouseX + " - " + mouseY;
    });
});