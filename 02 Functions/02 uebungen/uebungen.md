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

Möchtest du zu einer Aufgabe ein **visuelles Setup (HTML + Grundgerüst)** oder eine **automatische Testfunktion**? Sag einfach Bescheid!
