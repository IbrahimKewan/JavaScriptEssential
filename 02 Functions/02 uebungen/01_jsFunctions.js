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
let x = 0;
let btn = document.getElementById("zaehler");
btn.addEventListener("click", function(){
    x++;
    console.log(x);
});
//-------------------------------------------
//              warte und rufe
//-------------------------------------------
let tiemr = document.getElementById("timer").innerHTML = "0";
setTimeout(function(){
    document.getElementById("timer").innerHTML = 123;
}, 2000);
const jetzt = new Date();
const stunden = jetzt.getHours();
const minuten = jetzt.getMinutes();
const sekunden = jetzt.getSeconds();
document.getElementById("zeit").innerHTML = `${stunden}:${minuten}:${sekunden}`;
//-------------------------------------------
function zeit(){
    const jetzt = new Date();
    const stunden = jetzt.getHours();
    const minuten = jetzt.getMinutes();
    const sekunden = jetzt.getSeconds();
    function pad(number){
        if (number < 10) {
            return "0" + number; // Füge eine führende Null hinzu, wenn die Zahl kleiner als 10 ist
        }else{
            return number; // Keine führende Null erforderlich
        }
    }
    document.getElementById("zeit").innerHTML = `${pad(stunden)}:${pad(minuten)}:${pad(sekunden)}`;
    setTimeout(zeit, 1000); // Wiederhole die Funktion jede Sekunde
};
zeit();sdf