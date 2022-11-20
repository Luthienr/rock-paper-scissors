document.querySelector('#play-button').addEventListener('click', function makeInvisible(){
    const header = document.querySelector('.header');
    const article = document.querySelector('.article');
    const playButton = document.querySelector('.play-button');

    header.classList.add('invisible')
    article.classList.add('invisible')
    playButton.classList.add('invisible')

    const round = document.querySelector('.round');
    const board = document.querySelectorAll('.board');
    const button1 = document.querySelectorAll('.button1')
    const button2 = document.querySelector('.button2')

    round.classList.remove('invisible');
    for (i of board) {
        i.classList.remove('invisible');
    }
    for (i of button1) {
        i.classList.remove('invisible');
    }
    button2.classList.remove('invisible');
})  

let roundC = 0;
let playerC;

let pC = 0;
let cC = 0;

let i = 0;
let n = 0;

let computerC;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function computersChoice(){
    let computerChoice = Math.floor(Math.random()*9);
    if (0 <= computerChoice && computerChoice <= 2){
        computerChoice = 'Rock';
    }else if (2 <computerChoice && computerChoice <= 5){
        computerChoice = 'Paper';
    }else {
        computerChoice = 'Scissors'
    }

    const computerC = document.querySelector('.computer-choice');
    computerC.textContent = computerChoice;

    return computerChoice;

}

function roundCount(roundC){
    const roundB = document.querySelector('.round');
    roundB.textContent = 'Round ' + roundC;
}

function playerChoice(e) {
    roundC++;
    roundCount(roundC);

    playerC = `${e.target.getAttribute('id')}`;
    const playerChoice = document.querySelector('.player-choice');

    if (playerC == 'rock'){
        playerChoice.textContent = 'Rock';
    }else if (playerC == 'paper'){ 
        playerChoice.textContent = 'Paper';
    }else if (playerC == 'scissors'){
        playerChoice.textContent = 'Scissors'
    }

    computerC = computersChoice();

    if (computerC == 'Rock' && playerC == 'aper'){
        pC+=1;
    }else if (computerC == 'Rock' && playerC == 'scissors'){
        cC+=1;
    }else if (computerC == 'Rock' && playerC == 'paper'){
        pC+=1;
    }else if (computerC == 'Paper' && playerC == 'rock'){
        cC+=1;
    }else if (computerC == 'Paper' && playerC == 'scissors'){
        pC+=1;
    }else if (computerC == 'Scissors' && playerC == 'rock'){
        pC+=1;
    }else if (computerC == 'Scissors' && playerC == 'paper'){
        cC+=1;
    }

    n = pC;
    i = cC

    const playerBoard = document.querySelector('.player-score');
    const computerBoard = document.querySelector('.computer-score');

    playerBoard.textContent = n;
    computerBoard.textContent = i;

    if (pC == 5){
        const roundB = document.querySelector('.round');
        roundB.textContent = 'You Win!!';
        return
    }else if (cC == 5){
        const roundB = document.querySelector('.round');
        roundB.textContent = 'You Lose!!';
        return
    }

}

rock.addEventListener('click', playerChoice);
paper.addEventListener('click', playerChoice);
scissors.addEventListener('click', playerChoice);

function playAgain(){
    roundC = 0;
    pC = 0;
    cC = 0;

    const roundB = document.querySelector('.round');
    roundB.textContent = '';

    const playerBoard = document.querySelector('.player-score');
    const computerBoard = document.querySelector('.computer-score');
    playerBoard.textContent = '';
    computerBoard.textContent = '';

    const computerC = document.querySelector('.computer-choice');
    const playerChoice = document.querySelector('.player-choice');
    computerC.textContent = '';
    playerChoice.textContent = '';

}

const button2 = document.querySelector('.button2')
button2.addEventListener('click', playAgain);