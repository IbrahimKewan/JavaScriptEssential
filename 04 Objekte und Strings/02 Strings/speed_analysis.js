let testText = [
    "1 Der schnelle braune Fuchs springt über den faulen Hund.",
    "2 Der schnelle braune Fuchs springt über den faulen Hund.",
    "3 Der schnelle braune Fuchs springt über den faulen Hund.",
    "4 Der schnelle braune Fuchs springt über den faulen Hund."
];
let startTime, endTime;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function startTest(){
    const randomNr = getRandomInt(3);
    document.getElementById("inputText").value = testText[randomNr];
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    var button = document.getElementById("btn");
    button.innerHTML = "Test beenden";
    button.onclick = endTest;
}

function endTest(){
    endTime = new Date().getTime();
    document.getElementById("userInput").ariaReadOnly = true;
    var timeElapsed = (endTime -startTime) / 1000;
    var userTypeText = document.getElementById("userInput").value;
    var userTypedText = userTypeText.length;

    var typeWords = userTypeText.split(/\s+/).filter( function(word){
        return word !== "";
    }).length;

    var wpm = 0;
    if(timeElapsed !== 0 && !isNaN(typeWords)){
        wpm = Math.round((typeWords / timeElapsed) * 60);
    }
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML =   "<h2>Ergebnisse des Tipp-Tests:</h2>" +
                            "<p>Ganze Laenge: "+ userTypedText +"</p>" +
                            "<p>Getippte Woerter: " + typeWords + "</p>" +
                            "<p>Verstrichene Zeit: " + timeElapsed.toFixed(2) + " Sekunden</p>" +
                            "<p>Woerter pro Minute (WPM): " + wpm + "</p>";
            
    var button = document.getElementById("btn");
    button.innerHTML = "Test starten";
    button.onclick = startTest;
}