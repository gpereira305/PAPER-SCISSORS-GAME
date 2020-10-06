import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.querySelector('#playerScore');
const playerChoiceEl = document.querySelector('#playerChoice');
const computerScoreEl = document.querySelector('#computerScore');
const computerChoiceEl = document.querySelector('#computerChoice');
const resultText = document.querySelector('#resultText');

const playerRock = document.querySelector('#playerRock');
const playerPaper = document.querySelector('#playerPaper');
const playerScissors = document.querySelector('#playerScissors');
const playerLizard = document.querySelector('#playerLizard');
const playerSpock = document.querySelector('#playerSpock');

const computerRock = document.querySelector('#computerRock');
const computerPaper = document.querySelector('#computerPaper');
const computerScissors = document.querySelector('#computerScissors');
const computerLizard = document.querySelector('#computerLizard');
const computerSpock = document.querySelector('#computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
     rock: {
          name: 'Rock',
          defeats: ['scissors', 'lizard'],
     },
     paper: {
          name: 'Paper',
          defeats: ['rock', 'spock'],
     },
     scissors: {
          name: 'Scissors',
          defeats: ['paper', 'lizard'],
     },
     lizard: {
          name: 'Lizard',
          defeats: ['paper', 'spock'],
     },
     spock: {
          name: 'Spock',
          defeats: ['scissors', 'rock'],
     },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = ' ';

//Reseta todos os  'Selected' icons
function resetSelected() {
     allGameIcons.forEach((icon) => {
          icon.classList.remove('selected');
     });
     stopConfetti();
     removeConfetti();
}

 
//reseta a pontuaçao do playerChoice/computerChoice
function resetAll() {
    //reseta a pontuaçao do
     playerScoreNumber = 0;
     computerScoreNumber = 0;
     playerScoreEl.textContent = playerScoreNumber;
     computerScoreEl.textContent = computerScoreNumber;
     playerChoiceEl.textContent = ' ';
     computerChoiceEl.textContent = ' ';
     resultText.textContent = ' ';
     resetSelected();
}
window.resetAll = resetAll;

//Escolha randômica da inteligência artificial
function computerRandomChoice() {
     const computerChoiceNumber = Math.random();
     if (computerChoiceNumber < 0.2) {
          computerChoice = 'rock';
     } else if (computerChoiceNumber <= 0.4) {
          computerChoice = 'paper';
     } else if (computerChoiceNumber <= 0.6) {
          computerChoice = 'scissors';
     } else if (computerChoiceNumber <= 0.8) {
          computerChoice = 'lizard';
     } else {
          computerChoice = 'spock';
     }
}


//Dá estilo e adicona 'Selected' ao computerChoice
function displayComputerChoice() {
     switch (computerChoice) {
          case 'rock':
               computerRock.classList.add('selected');
               computerChoiceEl.textContent = 'Pedra';
               break;

          case 'paper':
               computerPaper.classList.add('selected');
               computerChoiceEl.textContent = 'Papel';
               break;

          case 'scissors':
               computerScissors.classList.add('selected');
               computerChoiceEl.textContent = 'Tesoura';
               break;

          case 'lizard':
               computerLizard.classList.add('selected');
               computerChoiceEl.textContent = 'Lagarto';
               break;

          case 'spock':
               computerSpock.classList.add('selected');
               computerChoiceEl.textContent = 'Spock';
               break;
          default:
               break;
     }
}

window.select = select;


//Checa o resultado, aumenta a pontuação e atualiza  o resultText
function updateScore(playerChoice) {
     if (playerChoice === computerChoice) {
          resultText.textContent = 'Empate !';
          resultText.style.color = '#DBC400';
     } else {
          const choice = choices[playerChoice];
          if (choice.defeats.indexOf(computerChoice) > -1) {
               startConfetti();
               resultText.textContent = ' Você Venceu!';
               resultText.style.color = '#71DB00';
               playerScoreNumber++;
               playerScoreEl.textContent = playerScoreNumber;
          } else {
               resultText.textContent = 'Você Perdeu!';
               computerScoreNumber++;
               resultText.style.color = '#D82703';
               computerScoreEl.textContent = computerScoreNumber;
          }
     }
}


//Chama as funções para processar a vez do jogador e sua escolha
function checkResult(playerChoice) {
     resetSelected();
     computerRandomChoice();
     displayComputerChoice();
     updateScore(playerChoice);
}


//Mostra o valor e o ícone que jogador escolheu
function select(playerChoice) {
     checkResult(playerChoice);
    //Adiciona a classe 'selected' para estilizar a ecolha do jogador
     switch (playerChoice) {
          case 'rock':
               playerRock.classList.add('selected');
               playerChoiceEl.textContent = 'Pedra';
               break;

          case 'paper':
               playerPaper.classList.add('selected');
               playerChoiceEl.textContent = 'Papel';
               break;

          case 'scissors':
               playerScissors.classList.add('selected');
               playerChoiceEl.textContent = 'Tesoura';
               break;

          case 'lizard':
               playerLizard.classList.add('selected');
               playerChoiceEl.textContent = 'Lagarto';
               break;

          case 'spock':
               playerSpock.classList.add('selected');
               playerChoiceEl.textContent = 'Spock';
               break;
          default:
               break;
     }
}


//Ao inicar o jogo, seta os valores ao padrão de zero
resetAll();
