let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
const messageEl = document.querySelector('#message');
const player1Scoreboard = document.querySelector('#player1Scoreboard');
const player2Scoreboard = document.querySelector('#player2Scoreboard');
const player1Dice = document.querySelector('#player1Dice');
const player2Dice = document.querySelector('#player2Dice');
const rollDice = document.querySelector('#rollBtn');
const resetBtn = document.querySelector('#resetBtn');


rollDice.addEventListener('click', () => {
    const rollRandomDice = Math.floor(Math.random() * 6) + 1
   if(player1Turn) {
    player1Dice.textContent = rollRandomDice
    messageEl.textContent = 'Player 2 Turn'
    player1Score += rollRandomDice
    player1Scoreboard.textContent = player1Score
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
   } else {
    messageEl.textContent = 'Player 1 Turn'
    player2Dice.textContent = rollRandomDice
    player2Score += rollRandomDice
    player2Scoreboard.textContent = player2Score
    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');
   }

   if(player1Score >= 20) {
    messageEl.textContent = 'Player 1 has won!'
    rollDice.style.display = 'none';
    resetBtn.style.display = 'block';
   } else if (player2Score >= 20) {
    messageEl.textContent = 'player 2 has won!'
    rollDice.style.display = 'none';
    resetBtn.style.display = 'block';
   }
   player1Turn =! player1Turn
})


resetBtn.addEventListener('click', () => {
    messageEl.textContent = 'Player 1 Turn';
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Score = 0
    player2Score = 0
    player1Dice.classList.add('active')
    player2Dice.classList.remove('active')
    resetBtn.style.display = 'none';
    rollDice.style.display = 'block';
    player1Turn = true;
}) 