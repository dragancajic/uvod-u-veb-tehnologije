
// memory.js - jQuery кôд игре у засебој датотеци
$(document).ready(function() {
    var broj_elemenata = 0;
    var slova = [];

    $('#zapocni_igru').click(function() {
        broj_elemenata = parseInt($('#broj_elemenata').val());
        console.log(broj_elemenata);

        //kreiraj_slova(n);
        kreiraj_polja(broj_elemenata);
    });

    function kreiraj_polja(n) {
        for (let i = 0; i < 2 * n; i++) {
            $('#polje').append(
                "<div style= ' \
                    width:100px; \
                    height:100px; \
                    background-color:#45ad7a; \
                    display:inline-block; \
                    margin:5px; \
                '>"
                + slova[i] +
                "</div>"
            );
        }
    }
});