let count = 0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function displayCount(){
    document.getElementById("countDisplay").innerHTML = count;
}
function checkCountValue(){
    if (count == 0){
        alert("Follower-Zählung wurde zurückgesetzt ...");
    }else if(count == 10){
        alert("Ihr Instagram-Beitrag hat 10 follower gewonnen! Herzlichen Glückwunsch!");
    }else if(count == 20){
        alert("Ihr Instagram-Beitrag hat 20 Follower gewonnen! Machen Sie weiter so!");
    }
}
function reset(){
    count = 0;
    displayCount();
    checkCountValue();
}
//test