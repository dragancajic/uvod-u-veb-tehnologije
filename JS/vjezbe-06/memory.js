
// memory.js - jQuery кôд игре у засебој датотеци
$(document).ready(function() {

    $('#zapocni_igru').click(function() {
        var broj_klikova = 0;
        var broj_elemenata = parseInt($('#broj_elemenata').val());
        var prethodni = null;
        console.log(broj_elemenata);

        //kreiraj_slova(n);
        niz_slova = generator_slucajnih_slova(broj_elemenata);
        kreiraj_polja(broj_elemenata, niz_slova);

        $('.card').click(function() {
            // ako kartica nije uparena "otvaramo" je
            if ($(this).attr('data-linked') === "false") {
                $(this).text($(this).data('value')); // "otvaramo" karticu
                broj_klikova++;

                // uparujemo kartice ili ih sakrivamo
                provjera($(this), prethodni, broj_klikova);
                prethodni = $(this); // pamtimo prethodnu karticu
            }
        });
    });

    function generator_slucajnih_slova(n) {
        let array = [];

        for (let index = 0; index < 2 * n; index++) {
            if (typeof array[index] === "undefined") {
                let slovo = 'A'.charCodeAt(0) + Math.floor(Math.random() * 26);
                array[index] = String.fromCharCode(slovo);
                rand_pos = Math.floor(index + 1 + Math.random() * (2 * n - index - 1));
                while (typeof array[rand_pos] !== "undefined")
                    rand_pos = Math.floor(index + 1 + Math.random() * (2 * n - index - 1));

                array[rand_pos] = String.fromCharCode(slovo);
            }
        }

        console.log(array); // погледајмо како изгледа низ појединачних слова ;-)
        return array;
    }

    function kreiraj_polja(n, arr) {
        $('#polje').empty();
        for (let i = 0; i < 2 * n; i++) {
            // NAKNADNO DODANO: dodajemo novi podatak "data-linked" pomoću kojeg znamo
            // da li je kartica uparena sa nekom drugom.
            const card = $('<div class="card"></div>')
                .attr('data-value', arr[i])
                .attr('data-linked', "false");
            console.log(card); // погледајмо како изгледа картица у конзоли ;-)
            $('#polje').append(card);
        }
    }

    function provjera(obj_new, obj_old, n) {

        if (n % 2 == 0) {
            if (obj_new.text() === obj_old.text()) {
                obj_new.attr('data-linked', "true");
                obj_old.attr('data-linked', "true");
            }
        } else {
            // УПОРЕДИТИ! Није свеједно! :-)
            console.log(obj_new);
            console.log(obj_new[0]);

            // "sakrivamo kartice koje nisu uparene, ali ne želimo sakriti karticu
            // koju smo upravo otvorili --> $(this)[0] !== obj_new[0]"
            $('.card').each(function() {
                // VAŽNO: U JS-u ne možemo porediti ovako nešto
                // $(selectionOne) === $(selectionTwo),
                // ali može
                // $(selectionOne)[0] === $(selectionTwo)[0]
                // neposredno iznad $('.card').each() izvrsiti naredbu
                // console.log(obj_new);
                // i
                // console.log(obj_new[0]);
                // i pogledati rezultat. <-- LOOK!
                if ($(this).attr('data-linked') === "false" && $(this)[0] !== obj_new[0]) {
                    $(this).text("");
                }
            });
        }
    }

});