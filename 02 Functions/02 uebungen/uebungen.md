## 🟡 **Level 2 – Closures & Callbacks**

1. **Closure-Zähler**
   Schreibe eine Funktion `erzeugeZähler()`, die beim Aufruf eine neue Zählerfunktion zurückgibt. Jeder Aufruf dieser Funktion soll einen internen Wert hochzählen.

2. **Callback mit Verzögerung**
   Erstelle eine Funktion `warteUndRufe(callback, sekunden)`, die nach `sekunden` den Callback aufruft (verwende `setTimeout`).

3. **Sortiere nach Callback**
   Schreibe eine Funktion `sortiereMitVergleich(array, vergleichsfunktion)`, die ein Array sortiert – aber die Sortierlogik aus einer übergebenen Funktion bezieht.

---

## 🟠 **Level 3 – DOM & Eventhandling**

4. **Klickzähler mit HTML**
   HTML: Ein Button mit `id="klickButton"`
   Aufgabe: Zähle, wie oft er geklickt wurde – und gib die Zahl im Button-Text aus.

5. **Mehrere Event-Handler**
   Füge zwei verschiedene `click`-Event-Listener an denselben Button an. Jeder soll etwas anderes tun.

6. **Interaktive Eingabe**
   HTML: Textfeld + Button
   JS: Beim Klick soll der Inhalt des Textfelds ausgelesen und in einem `<div>` angezeigt werden.

---

## 🔵 **Level 4 – map, filter, reduce, forEach**

7. **Benutzer filtern**
   Gegeben ein Array mit Benutzerobjekten `{name: "", alter: number}`.
   Filtere nur die mit Alter ≥ 18.

8. **Summe berechnen mit reduce**
   Gegeben: `[5, 10, 15, 20]`.
   Berechne die Gesamtsumme mit `reduce()`.

9. **Eigene map-Funktion bauen**
   Schreibe deine eigene Funktion `meineMap(array, callback)` – sie soll wie `Array.prototype.map()` funktionieren.

---

## 🟣 **Level 5 – Asynchrone Programmierung (Promises, async/await)**

10. **Fake-Fetch-Funktion**
    Simuliere eine `ladeDaten()`-Funktion, die nach 2 Sekunden ein JSON-Objekt zurückgibt. Verwende Promises.

11. **Async/Await mit Fehlerbehandlung**
    Erstelle eine `async` Funktion, die Daten von einer URL holt (z. B. `https://jsonplaceholder.typicode.com/todos/1`)
    Fange mögliche Fehler mit `try...catch` ab.

12. **Mehrere Fetches parallel**
    Hole 3 verschiedene URLs gleichzeitig mit `Promise.all()` und gib die Ergebnisse in der Konsole aus.

---

## 🔴 **Bonus – Kombination**

13. **Formular validieren**
    HTML: Ein Formular mit Name, E-Mail und "Absenden"-Button
    Aufgabe: Validierung auf "nicht leer" + Email enthält `@`. Gib Fehler in Rot aus.

14. **Tastatureingabe abfangen**
    HTML: Ein Textfeld
    JS: Wenn der Nutzer "Enter" drückt, zeige eine Nachricht in der Konsole.

15. **Spiel: Klick so oft du kannst**
    Erstelle ein Spiel mit einem Button und einem Timer (z. B. 10 Sekunden).
    Zähle Klicks – und zeige das Ergebnis, wenn die Zeit vorbei ist.

---
Sehr gerne! 💪
Hier bekommst du eine **komplette Übungssammlung** für alle wichtigen JavaScript-Bereiche:
👉 **Array-Methoden**, **Allgemeine Funktionen**, **Funktionen & Callbacks**.

---

## ✅ 1. **Array-Methoden – Übungen**

### 📌 `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`, `sort`, ...

1. Verwende `forEach()`, um alle Namen in einem Array in der Konsole auszugeben.
2. Erstelle mit `map()` ein neues Array mit den Längen aller Wörter in einem Wort-Array.
3. Filtere mit `filter()` alle Zahlen über 100 aus einem Array.
4. Nutze `reduce()`, um die Summe aller Zahlen in einem Array zu berechnen.
5. Verwende `find()`, um die erste Zahl im Array zu finden, die durch 5 teilbar ist.
6. Nutze `some()`, um zu prüfen, ob mindestens ein Element `null` ist.
7. Nutze `every()`, um zu prüfen, ob alle Zahlen gerade sind.
8. Sortiere ein Array von Zahlen **aufsteigend**.
9. Verwandle ein Array von Objekten `{name, punktzahl}` in ein Array mit nur den Punktzahlen.
10. Filtere alle Objekte aus einem Array mit `{name, aktiv: true|false}`, die **aktiv** sind.

---

## 🌍 2. **Allgemeine JavaScript-Funktionen – Übungen**

### 📌 `parseInt`, `Number`, `String`, `Math`, `JSON`, `Object`, `Date`, ...

11. Wandle einen String `"42.5"` in eine Ganzzahl und in eine Kommazahl um.
12. Prüfe, ob `"abc"` eine gültige Zahl ist (Tipp: `isNaN()`).
13. Runde `3.6` ab, auf und ganz normal.
14. Erzeuge eine Zufallszahl zwischen `1` und `100`.
15. Nutze `Object.keys()` und `Object.values()` auf `{name: "Ali", alter: 20}`.
16. Erstelle einen Zeitstempel für das aktuelle Datum.
17. Wandelt ein Objekt in einen JSON-String um – und wieder zurück.
18. Erstelle ein Objekt mit verschachtelten Objekten und greife auf tiefe Werte zu.
19. Nutze `Array.join()` um ein Array von Namen in einen Satz umzuwandeln.
20. Verwende `Array.slice()` und `Array.splice()` an einem Beispielarray `[1,2,3,4,5]`.

---

## 🔁 3. **Funktionen & Callback-Prinzip – Übungen**

### 📌 `function`, `arrow function`, `callback`, `this`, `bind`, `async/await`, ...

21. Schreibe eine Funktion `begrüßen(name)`, die `"Hallo NAME"` zurückgibt.
22. Verwandle diese Funktion in eine Arrow Function.
23. Erstelle `ausführen(callback)`, die eine Funktion ausführt, die ihr übergeben wird.
24. Erstelle eine Funktion `rechnen(a, b, operationCallback)` → `+`, `-`, `*`, `/`
25. Simuliere mit `setTimeout()` eine verzögerte Nachricht nach 2 Sekunden.
26. Schreibe eine Funktion mit `...args`, die alle Zahlen summiert.
27. Erstelle ein Objekt mit einer Methode und verwende `this` darin.
28. Nutze `bind()`, um eine Funktion fest mit einem Objekt zu verbinden.
29. Baue eine Funktion, die ein Promise zurückgibt – und rufe sie mit `async/await` auf.
30. Schreibe eine Funktion mit `try/catch`, die eine JSON-Zeichenkette parst und Fehler behandelt.

---

## 🧠 Bonus – Selbstbau-Funktionen

31. Baue `meineMap(array, callback)` – funktioniert wie `Array.prototype.map`.
32. Baue `meineFilter(array, callback)` – wie `filter()`.
33. Baue `meineForEach(array, callback)` – wie `forEach()`.
34. Baue `meineReduce(array, callback, startwert)` – wie `reduce()`.

---