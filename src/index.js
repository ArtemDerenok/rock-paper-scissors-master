import './scss/style.scss';
import getRandomNum from './utils/getRandomNum';

const gameField = document.getElementById('gameField');

const chipArray = ['scissor', 'paper', 'rock', 'lizard', 'spock'];

const beatsMap = {
  scissor: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissor'],
  lizard: ['spock', 'paper'],
  spock: ['scissor', 'rock'],
};

const getWinner = (chip) => {
  const randomNum = getRandomNum(0, chipArray.length - 1);
  const enemyChip = chipArray[randomNum];

  if (chip === enemyChip) {
    console.log('Ничья');
  } else if (beatsMap[chip].includes(enemyChip)) {
    console.log('Победа');
    console.log(chip);
    console.log(enemyChip);
  } else {
    console.log('Поражение');
    console.log(chip);
    console.log(enemyChip);
  }
};

gameField.addEventListener('click', (event) => {
  let chipType = event.target.dataset.chip;
  if (chipType) {
    getWinner(chipType);
  }
  chipType = event.target.offsetParent.dataset.chip;

  if (chipType) {
    getWinner(chipType);
  }
  return false;
});
