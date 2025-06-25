function adiere(a,b){
    return a +b;
}
console.log(adiere(1,229));
function sagHallo(name){
    return `Hallo,  ${name}`;
}
console.log(sagHallo("TEST"));

let var1 = 123;
var var2 = 123;
const var3 = 123;

function bereiche(){
    var1 += 123;
    return var1;
}
console.log(bereiche());

function zae(){
    let z = 0;
    return function(){
        z++;
        console.log(z);
    };
}
const meinZaeler = zae();
meinZaeler();
meinZaeler();
meinZaeler();
const meinZaeler_2222 = zae();
meinZaeler_2222();

// Callback mit Verzögerung Erstelle eine Funktion warteUndRufe(callback, sekunden), die nach sekunden den Callback aufruft (verwende setTimeout).
function warteUndRufe(callback, sekunden){
    setTimeout(callback,sekunden * 1000);
}
function hallo() {
    console.log("Hallo nach 3 Sekunden!");
}
warteUndRufe(hallo, 3);

// Akruelle uhrzeit 
const lblTime = document.getElementById("zeit");
function zeit(){
    let jetzt = new Date();
    let st = jetzt.getHours();
    let min = jetzt.getMinutes();
    let sek = jetzt.getSeconds();
    function pad(zahl){
        if(zahl <10){
            return `0${zahl}`;
        }
        return zahl;
    }
    lblTime.innerHTML = `${pad(st)}:${pad(min)}:${pad(sek)}`;
    setTimeout(zeit, 1000);
}
zeit();

// Button zähler
const BtnZaehler = document.getElementById("zaehler");
const btnReset = document.getElementById("reset");
let x = 0;
function zaehler(){
    x++;
    console.log(`btn Zähler: ${x}`);
}
BtnZaehler.addEventListener("click", zaehler);
btnReset.addEventListener("click", function(){
    x = 0;
    console.log("Zähler wird zurück gesetzt ... ");
});

// Sortiere nach Callback Schreibe eine Funktion sortiereMitVergleich(array, vergleichsfunktion), die ein Array sortiert – aber die Sortierlogik aus einer übergebenen Funktion bezieht.
function sortiereMitVergleich(array, vergleichsfunktion) {
    return array.sort(vergleichsfunktion);
}
let zalhen = [1,2,5,6,3,7,44,56,7,4,8,4432];
let aufsteigend = sortiereMitVergleich(zalhen, function(a,b){
    return a-b;
})
console.log(aufsteigend);