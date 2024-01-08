
// ослушкивач догађаја у засебној датотеци
document.addEventListener("DOMContentLoaded", function() {
    var mojDiv = document.getElementById("mojDiv");

    // Dodajemo događaj "mouseover" (prelazak mišem) na div element
    mojDiv.addEventListener("mouseover", function() {
        // Generišemo nasumičnu boju u HEX formatu
        var novaBoja = getRandomColor();

        // Postavljamo boju elementa na generisanu boju
        mojDiv.style.backgroundColor = novaBoja;
    });

    // Funkcija za generisanje nasumične boje u HEX formatu
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]; //floor - donji cio dio
            // дакле, бирамо `random` позиције у низу карактера од 0 до 15, тј. [0, 15] √
        }
        return color;
    }
});