// ✅ 1. Array-Methoden – Übungen
// 📌 forEach, map, filter, reduce, find, some, every, sort, ...
// Verwende forEach(), um alle Namen in einem Array in der Konsole auszugeben.
const namen = [
  { name: "Ali", alter: 25 },
  { name: "Maya", alter: 17 },
  { name: "John", alter: 19 },
  { name: "Lina", alter: 15 },
  { name: "Emma", alter: 30 },
  { name: "Tom", alter: 45 },
  { name: "Sara", alter: 22 }
];

let nameOutput = "";
namen.forEach(x =>{
    nameOutput += x.name + " ";
})
console.log(nameOutput);
const neuarray = nameOutput
                    .split(" ")
                    .filter(name => name.trim() !== "");
const nameWithSpace = neuarray.reduce((speicher,aktElement,index) =>{
    const erste = index === 0;
    const letzte = index === neuarray.length -1;
    if(erste){
        return aktElement;
    }else if( letzte){
        return `${speicher} und ${aktElement}`;
    }else{
        return `${speicher}, ${aktElement}`;
    }
},"");
console.log(nameWithSpace);
// Erstelle mit map() ein neues Array mit den Längen aller Wörter in einem Wort-Array.
const vokabelLength = neuarray.map(name => {
    return `${name}: ${name.length}`;
});
console.log(vokabelLength);
// Filtere mit filter() alle Zahlen über 100 aus einem Array.
const ArrNumber = [33,123,11,323,111,33,645,4,7674,456,44,3,785,456,89,67,22,333];
const moreThan100 = ArrNumber.filter(value =>{
    if(value > 100) return value; 
});
console.log(moreThan100);
// Nutze reduce(), um die Summe aller Zahlen in einem Array zu berechnen.
const sumAge = namen.reduce((speicher,aktElem) =>{
    return speicher + aktElem.alter;
}, 0);
console.log(sumAge);
// Verwende find(), um die erste Zahl im Array zu finden, die durch 5 teilbar ist.
const find5 = namen.find(name =>{
    return name.alter %5 == 0
});
console.log(`${find5.name} sein alt ist durch 5 teilbar: ${find5.alter}`);
// Nutze some(), um zu prüfen, ob mindestens ein Element null ist.
// Nutze every(), um zu prüfen, ob alle Zahlen gerade sind.
// Sortiere ein Array von Zahlen aufsteigend.
// Verwandle ein Array von Objekten {name, punktzahl} in ein Array mit nur den Punktzahlen.
// Filtere alle Objekte aus einem Array mit {name, aktiv: true|false}, die aktiv sind.