const colors = [
  'red',
  'blue',
  'green',
  'purple',
  'orange',
  'pink',
  'yellow',
  'brown',
  'cyan',
  'magenta'
];

let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startBtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// ------------------------------------------
//              Karten erstellen 
// ------------------------------------------
function generateCards(){
    for(const color of cards){
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

// ------------------------------------------
//              Schuffle erstellen 
// ------------------------------------------
function shuffle(arr){
    for (let index = arr.length -1; index >0; index--) {
        const element = Math.floor(Math.random() * (index +1));
        [arr[index], arr[element]] = [arr[element], arr[index]];        
    }
    return arr;
}

// ------------------------------------------
//              handleCardClick(event) 
// ------------------------------------------
function handleCardClick(event){
    const card = event.target;
    if(!card.classList.contains('card') || card.classList.contains('matched')){
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if(selectedCards.length === 2){
        setTimeout(checkMatch,500);
    }
}

// ------------------------------------------
//              checkMatch 
// ------------------------------------------
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}
function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Punktestand auf null zurücksetzen
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Spiel vorbei!');
            startbtn.disabled = false;
        }
    }, 1000);
}
startBtn.addEventListener('click', startGame);