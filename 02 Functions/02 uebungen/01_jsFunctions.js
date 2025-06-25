// function adiere(a,b){
//     return a +b;
// }
// console.log(adiere(1,229));
// function sagHallo(name){
//     return `Hallo,  ${name}`;
// }
// console.log(sagHallo("TEST"));

// let var1 = 123;
// var var2 = 123;
// const var3 = 123;

// function bereiche(){
//     var1 += 123;
//     return var1;
// }
// console.log(bereiche());

//-------------------------------------------
//              Zähler
//-------------------------------------------
// let x = 0;
// let btn = document.getElementById("zaehler");
// btn.addEventListener("click", function(){
//     x++;
//     console.log(x);
// });
//-------------------------------------------
//              warte und rufe
//-------------------------------------------
// let tiemr = document.getElementById("timer").innerHTML = "0";
// setTimeout(function(){
//     document.getElementById("timer").innerHTML = 123;
// }, 2000);
// const jetzt = new Date();
// const stunden = jetzt.getHours();
// const minuten = jetzt.getMinutes();
// const sekunden = jetzt.getSeconds();
// document.getElementById("zeit").innerHTML = `${stunden}:${minuten}:${sekunden}`;
//-------------------------------------------
// function zeit(){
//     const jetzt = new Date();
//     const stunden = jetzt.getHours();
//     const minuten = jetzt.getMinutes();
//     const sekunden = jetzt.getSeconds();
//     function pad(number){
//         if (number < 10) {
//             return "0" + number; // Füge eine führende Null hinzu, wenn die Zahl kleiner als 10 ist
//         }else{
//             return number; // Keine führende Null erforderlich
//         }
//     }
//     document.getElementById("zeit").innerHTML = `${pad(stunden)}:${pad(minuten)}:${pad(sekunden)}`;
//     setTimeout(zeit, 1000); // Wiederhole die Funktion jede Sekunde
// };
// zeit();

// let z = 0;
// const BtnZaehler = document.getElementById("zaehler");
// BtnZaehler.addEventListener("click", function(){
//     z++;
//     console.log("Funktion aufruf: ", z);
// });
// function zaehler() {
//     z++;
//     console.log("Funktion aufruf: ", z);
// }
// const BtnZaehler2 = document.getElementById("zaehler");
// BtnZaehler2.addEventListener("click", zaehler);

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
let x = 0;
function zaehler(){
    x++;
    console.log(`btn Zähler: ${x}`);
}
BtnZaehler.addEventListener("click", zaehler);