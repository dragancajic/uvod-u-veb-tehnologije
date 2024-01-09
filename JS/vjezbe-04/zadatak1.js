
// ослушкивач догађаја у засебној датотеци
document.addEventListener("DOMContentLoaded", function() {

    // Liste tajnih reči
    var tajneReci = [
        "Programiranje",
        "Javascript",
        "Beograd",
        "Novi Grad",
        "Uvod u veb tehnologije",
        "drvo"
    ];

    // Biranje nasumične reči iz liste
    var tajnaRec = tajneReci[Math.floor(Math.random() * tajneReci.length)];

    // Prikazivanje tajne reči kao niza crtica
    var trenutnoStanje = [];
    for (var i = 0; i < tajnaRec.length; i++) {
        trenutnoStanje.push("_");
    }

    console.log(trenutnoStanje);

    // Broj dozvoljenih grešaka
    var maksimalneGreske = 6;

    // Broj trenutnih grešaka
    var trenutneGreske = 0;

    // Elementi DOM-a
    var tajnaRecElement = document.getElementById("tajnaRec");
    var brojGresakaElement = document.getElementById("brojGresaka");

    // Inicijalizacija prikaza
    prikaziStanje();

    // Funkcija za prikazivanje trenutnog stanja
    function prikaziStanje() {
        tajnaRecElement.textContent = trenutnoStanje.join(" ");
        brojGresakaElement.textContent = trenutneGreske;
    }

    document.getElementById('pogodiSlovo').addEventListener('click', function() {
        var unosSlovaElement = document.getElementById("unosSlova");
        var unesenoSlovo = unosSlovaElement.value.toLowerCase();
        var unesenoSlovoVeliko = unosSlovaElement.value.toUpperCase();

        if (unesenoSlovo.length === 1) {
            if (tajnaRec.includes(unesenoSlovo) || tajnaRec.includes(unesenoSlovoVeliko)) {
                // Ažuriranje trenutnog stanja sa pogodjenim slovom
                for (var i = 0; i < tajnaRec.length; i++) {
                    if (tajnaRec[i].toLowerCase() === unesenoSlovo) {
                        trenutnoStanje[i] = tajnaRec[i];
                    }
                }
            } else {
                // Povećanje broja grešaka ako slovo nije u tajnoj reči
                trenutneGreske++;
            }

            // Provera da li je igra završena
            proveriKrajIgre();
            // Prikazivanje trenutnog stanja
            prikaziStanje();
        }

        // Čišćenje polja za unos
        unosSlovaElement.value = "";
    });

    function proveriKrajIgre() {
        if (trenutneGreske >= maksimalneGreske) {
            alert("Izgubili ste! Tražena reč je: " + tajnaRec);
            resetujIgru();
        } else if (!trenutnoStanje.includes("_")) {
            alert("Čestitamo, pobedili ste!");
            resetujIgru();
        }
    }

    // Funkcija za resetovanje igre
    function resetujIgru() {
        tajnaRec = tajneReci[Math.floor(Math.random() * tajneReci.length)];

        // Prikazivanje tajne reči kao niza crtica
        trenutnoStanje = [];
        for (var i = 0; i < tajnaRec.length; i++) {
            trenutnoStanje.push("_");
        }

        // Broj trenutnih grešaka
        trenutneGreske = 0;
        prikaziStanje();
    }

});