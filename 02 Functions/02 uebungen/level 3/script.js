// Level 3 – DOM & Eventhandling
//     Klickzähler mit HTML HTML: Ein Button mit id="klickButton" Aufgabe: Zähle, wie oft er geklickt wurde – und gib die Zahl im Button-Text aus.
const zaehler = document.getElementById("zaehler");
let x = 0;
zaehler.addEventListener("click", function(){
    x++;
    document.getElementById("clickANZ").innerText = `click ANZ: ${x}`;
});
const resetCounter = document.getElementById("resetCounter");
resetCounter.addEventListener("click", function(){
    x = 0;
    document.getElementById("clickANZ").innerText = `click ANZ: ${x}`;
});

//     Mehrere Event-Handler Füge zwei verschiedene click-Event-Listener an denselben Button an. Jeder soll etwas anderes tun.
const btnMoreClicks = document.getElementById("btnMoreClicks");
const lblMoreClicks = document.getElementById("lblMoreClicks")
btnMoreClicks.addEventListener("click", function(){
    document.getElementById("clickANZ").style.color = "red";
    lblMoreClicks.innerHTML = "One Click ...";
    lblMoreClicks.style.color = "red";
});
btnMoreClicks.addEventListener("dblclick", function(){
    document.getElementById("clickANZ").style.color = "green";
    lblMoreClicks.innerHTML = "dblClick ...";
    lblMoreClicks.style.color = "green";
});

//     Interaktive Eingabe HTML: Textfeld + Button JS: Beim Klick soll der Inhalt des Textfelds ausgelesen und in einem <div> angezeigt werden.
const btnInput = document.getElementById("btnInput");
btnInput.addEventListener("click", function(){
    const textInput = document.getElementById("textInput");
    const ausgabe = document.getElementById("ausgabe");

    if(textInput.value == ""){
        alert("Input darf nicht leer sein");
        return;
    }
    ausgabe.innerHTML = textInput.value;
    textInput.value = "";
});

// reload
const btnReload = document.getElementById("btnReload");
btnReload.addEventListener("click", function(){
    location.reload();
})