//  Level 4 – map, filter, reduce, forEach

// Benutzer filtern Gegeben ein Array mit Benutzerobjekten {name: "", alter: number}. Filtere nur die mit Alter ≥ 18.
const benutzer = [
  { name: "Ali", alter: 25 },
  { name: "Maya", alter: 17 },
  { name: "John", alter: 19 },
  { name: "Lina", alter: 15 },
  { name: "Emma", alter: 30 },
  { name: "Tom", alter: 45 },
  { name: "Sara", alter: 22 },
  { name: "Ben", alter: 12 },
  { name: "Nora", alter: 34 },
  { name: "Leo", alter: 18 },
  { name: "Anna", alter: 28 },
  { name: "Tim", alter: 16 },
  { name: "Julia", alter: 41 },
  { name: "Chris", alter: 20 },
  { name: "Zara", alter: 29 },
  { name: "David", alter: 33 },
  { name: "Sophie", alter: 14 },
  { name: "Max", alter: 38 },
  { name: "Laura", alter: 21 },
  { name: "Noah", alter: 13 }
];
const tableContainer = document.getElementById("table");

const createTable = document.createElement("table");

const headerRow = document.createElement("tr");
const thName = document.createElement("th");
const thAlter = document.createElement("th");
// thAlter.colSpan = 5;
// thName.colSpan = 6;
thName.textContent = "Name";
thAlter.textContent = "Alter";
headerRow.appendChild(thName);
headerRow.appendChild(thAlter);
createTable.appendChild(headerRow);

const vollJaehring = benutzer.filter(user => user.alter >= 18);

for (let i = 0; i < vollJaehring.length; i++) {
  const row = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.textContent = vollJaehring[i].name;
  const tdAlter = document.createElement("td");
  tdAlter.textContent = vollJaehring[i].alter;
  row.appendChild(tdName);
  row.appendChild(tdAlter);

  createTable.appendChild(row);
}

tableContainer.innerHTML = "";
tableContainer.appendChild(createTable);

// Nur minderjährig
const mind = benutzer.filter(user => user.alter < 18);
console.log(mind);
for (let index = 0; index < mind.length; index++) {
    const element = mind[index].alter;
    console.log(element);
}

// Nur gerade Zahlen
const zahlen = [1,2,34,5,7,88,567,34,5,37,3,6,78,45];
const geradeZaahlen = zahlen.filter(zahl => zahl%2 == 0);
console.log(geradeZaahlen);

// Namen mit mehr als 4 buchstaben
const namen = ["Tom", "Sandra", "Max", "Miriam", "Ali"];
const mehrAls4 = namen.filter(name => name.length > 4);
console.log(mehrAls4);

// Alle alter verdoppeln
const versoppeln = benutzer.map(user => user.alter * 2);
console.log(versoppeln);

// namen mit großbuchstaben
const names = ["Ali", "Maya", "Leo"];
console.log(names.map(name => name.toUpperCase()));

// namen mit begrüßung
console.log(names.map(name => `Hello ${name}`));

// Nur Erwaschene namen
const personen = [
  { name: "Tina", alter: 16 },
  { name: "Jan", alter: 21 },
  { name: "Mira", alter: 19 }
];
const Erwaschene = personen.filter(per => per.alter >=18);
console.log(Erwaschene.map(user => user.name));

// Summe berechnen mit reduce Gegeben: [5, 10, 15, 20]. Berechne die Gesamtsumme mit reduce().
const arr = [5, 10, 15, 20];
const summe = arr.reduce((aktSumme, wert) => aktSumme+wert, 0);
console.log(summe);

// längste wort finden
const woerter = ["Apfel", "Banane", "Kiwi", "Wassermelone"];
const laengste = woerter.reduce((aktWort, nextWort) => aktWort.length > nextWort.length ? aktWort : nextWort, "");
console.log(laengste);

// summe eines array
const ArrZahlen = [4, 8, 15, 16, 23, 42];
const summeArray = ArrZahlen.reduce((aktWert, nextWert) => aktWert += nextWert, 0);
console.log(summeArray);

// durchschnitt berechen
const durchschnitt = ArrZahlen.reduce((aktWert, nextWert) => aktWert+nextWert, 0);
let durch = durchschnitt / ArrZahlen.length;
console.log(`durchschnitt: ${durch.toFixed(2)}`);

// 4. Anzahl der Vorkommen zählen
const buchstaben = ["a", "b", "a", "c", "a", "b"];
const ausgabe = buchstaben.reduce((aktBuch, nextBuch) =>
    {
        if(aktBuch[nextBuch]){
            aktBuch[nextBuch]++;
        }else{
            aktBuch[nextBuch] = 1;
        }
        return aktBuch;
    }
,{});
console.log(ausgabe);
// Anzahl der Wörter in einem Satz zählen
const text = "Hallo Welt das ist eine schöne Welt";
const spliting = text.split(" ");
const anz = spliting.reduce((akt,nxt) =>
        {
            if(akt[nxt]){
                akt[nxt]++;
            }else{
                akt[nxt] = 1;
            }
            return akt;
        }
    ,{});
console.log(anz);

// Aufgabe: Zähle, wie oft jeder Vokal (a, e, i, o, u) vorkommt.
const buchstaben_ = ["a", "b", "e", "i", "x", "a", "o", "u", "a"];
// const anzahl = buchstaben.reduce((akt,nxt) =>{
//     if(akt[nxt] == "a" || akt[nxt] == "e"){
//         akt[nxt]++;
//     }else{
//         akt[nxt] = 1;
//     }
//     return akt;
// }, {});
console.log(anzahl);
//  5. Alter-Summe von Personen
const personeneeee = [
  { name: "Ali", alter: 20 },
  { name: "Maya", alter: 25 },
  { name: "Tom", alter: 30 }
];
// 6. Alle Namen zu einem Satz verketten ("Ali, Maya und Tom")
const namennnn = ["Ali", "Maya", "Tom"];

// Eigene map-Funktion bauen Schreibe deine eigene Funktion meineMap(array, callback) – sie soll wie Array.prototype.map() funktionieren.