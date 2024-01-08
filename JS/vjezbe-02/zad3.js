
// ослушкивач догађаја у засебној датотеци
document.addEventListener("DOMContentLoaded", function() {

    let dugme = document.getElementById("dugme");

    dugme.addEventListener("click", function() {
        let prikaz = document.getElementById('broj_klikova');
        let broj = Number.parseInt(prikaz.textContent);
        broj++;
        prikaz.textContent = broj;
    });
});

/*
~ Node: textContent property - Web APIs | MDN
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

Note: `textContent` and `HTMLElement.innerText` are easily confused,
but the two properties are different in important ways.
*/