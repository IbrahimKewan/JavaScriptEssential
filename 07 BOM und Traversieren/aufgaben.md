### 1. `shuffle(array)`

* Mische die Karten zufällig durch
* Nutze z. B. Fisher-Yates-Algorithmus
* Rückgabe: ein gemischtes Array

---

### 2. `generateCards()`

* Erstelle für jede Farbe ein `<div>`-Element
* Gib ihm die Klasse `"card"`
* Speichere die Farbe als `data-color`
* Zeige als Text zuerst „?“

---

### 3. `handleCardClick(event)`

* Wird bei jedem Klick auf eine Karte aufgerufen
* Zeigt die Farbe der Karte an
* Speichert sie in einem Array `selectedCards`
* Wenn 2 Karten ausgewählt sind, rufe `checkMatch()` auf

---

### 4. `checkMatch()`

* Vergleicht die beiden Karten in `selectedCards`
* Wenn Farben gleich:

  * Füge Klasse `matched` hinzu
  * Erhöhe `score`
* Wenn nicht gleich:

  * Decke sie wieder zu
* Leere `selectedCards`

---

### 5. `startGame()`

* Setzt `score` auf 0
* Mische die Farben
* Lösche alle Karten aus dem Spielfeld
* Rufe `generateCards()` auf
* Starte den Timer mit `startGameTimer()`

---

### 6. `startGameTimer(time)`

* Zeigt die Zeit in Sekunden an
* Jede Sekunde: Zeit -1
* Wenn Zeit = 0 → Spiel vorbei → `alert()` und Timer stoppen

---

### 7. `updateScore()`

* Zeigt den aktuellen Punktestand im DOM an

---

## 🧪 Optional:

* `resetGame()` – setzt alles komplett zurück
* `disableUnclickableCards()` – verhindert, dass man fertige Karten nochmal klickt
* `checkWin()` – prüft, ob alle Karten matched sind → Spiel gewonnen

---