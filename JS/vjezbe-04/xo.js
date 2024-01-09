var velicinaTable;
var tabela;
var igracNaPotezu;
var rezultatElement;

function startujIgru() {
    velicinaTable = parseInt(document.getElementById("velicinaTable").value);
    igracNaPotezu = "X";

    kreirajTabelu();
}

function kreirajTabelu() {
    tabela = document.getElementById("tabla").getElementsByTagName("table")[0];
    rezultatElement = document.getElementById("rezultat");
    rezultatElement.textContent = "";

    tabela.innerHTML = "";
    for (var i = 0; i < velicinaTable; i++) {
        var red = tabela.insertRow(i);
        for (var j = 0; j < velicinaTable; j++) {
            var celija = red.insertCell(j);
            celija.addEventListener("click", function() {
                odigrajPotez(this);
            });
        }
    }
}

function odigrajPotez(celija) {
    if (celija.textContent === "" && !rezultatElement.textContent) {
        celija.textContent = igracNaPotezu;
        if (proveriPobedu(celija)) {
            rezultatElement.textContent = "Pobednik: " + igracNaPotezu;
        } else if (proveriNerešeno()) {
            rezultatElement.textContent = "Nerešeno!";
        } else {
            igracNaPotezu = (igracNaPotezu === "X") ? "O" : "X";
        }
    }
}

function proveriPobedu(celija) {
    var red = celija.parentNode.rowIndex;
    console.log(red);
    var kolona = celija.cellIndex;
    var simbol = celija.textContent;

    // Provera vodoravnih i horizontalnih linija
    if (proveriRed(red, simbol) ||
        proveriKolonu(kolona, simbol)) {
        return true;
    }

    // Provera dijagonala
    // TODO: потребно имплементирати!
    // ...

    return false;
}

function proveriRed(red, simbol) {
    let brojc = 0;

    for (let index = 0; index < velicinaTable - 2; index++) {
        if (tabela.rows[red].cells[index].textContent === simbol &&
            tabela.rows[red].cells[index + 1].textContent === simbol)
            brojc++;
        else
            brojc = 0;
    }

    if (brojc == 4)
        return true;

    return false;
}

function proveriKolonu(kolona, simbol) {
    let brojc = 0;

    for (let index = 0; index < velicinaTable - 1; index++) {
        if (tabela.rows[index].cells[kolona].textContent === simbol && tabela.rows[index + 1].cells[kolona].textContent === simbol)
            brojc++;
        else
            brojc = 0;
    }

    if (brojc == 4)
        return true;

    return false;
}


function proveriNerešeno() {
    for (var i = 0; i < velicinaTable; i++) {
        for (var j = 0; j < velicinaTable; j++) {
            if (tabela.rows[i].cells[j].textContent === "") {
                return false;
            }
        }
    }
    return true;
}