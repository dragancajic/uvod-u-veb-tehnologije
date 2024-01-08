
// ослушкивач догађаја у засебној датотеци
document.addEventListener("DOMContentLoaded", function() {
    var prikaziSakrij = document.getElementById("prikaziSakrij"); // button
    var elementPS = document.getElementById("sakrijPrikaziDiv");  // div

    // Postavljamo početno stanje - div je vidljiv
    var divVidljiv = true;

    // TODO:
    // напиши ослушкивач/руковалац догађаја (енгл. event listener/handler) за <div> елемент!
    // Dodajemo događaj "click" na div

    // Dodajemo događaj "click" na `button`
    prikaziSakrij.addEventListener("click", function() {
        // Ako je div trenutno vidljiv, sakrij ga; inače, prikaži ga
        if (divVidljiv) {
            elementPS.style.display = "none";
            // div није више видљив, па је промјенљива видљивости
            //divVidljiv = false;

            // TODO: пробај да фиксираш дугме да не мијења позицију када је <div> сакривен!
            // идеја 1: <div> елемент који нема упадљиву боју, исцртану границу и текст :thinking:
            // идеја 2: <div> елемент позициониран тако да не мијења своју позицују на страници ???
        } else {
            elementPS.style.display = "block";
            // div је опет видљив, па је промјенљива видљивости
            //divVidljiv = true;
        }

        // Menjamo stanje vidljivosti za sledeći klik
        divVidljiv = !divVidljiv;
    });
});