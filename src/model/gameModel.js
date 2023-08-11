/* eslint-disable no-constructor-return */
import getRandomNum from '../utils/getRandomNum';
import GameView from '../view/gameView';

class GameModel {
  static #instance = null;

  #chipArray = ['scissor', 'paper', 'rock', 'lizard', 'spock'];

  #beatsMap = {
    scissor: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissor'],
    lizard: ['spock', 'paper'],
    spock: ['scissor', 'rock'],
  };

  constructor() {
    if (GameModel.#instance) {
      return GameModel.#instance;
    }
    GameModel.#instance = this;
  }

  getWinner(chip) {
    const randomNum = getRandomNum(0, this.#chipArray.length - 1);
    const enemyChip = this.#chipArray[randomNum];

    if (chip === enemyChip) {
      console.log('Ничья');
    } else if (this.#beatsMap[chip].includes(enemyChip)) {
      console.log('Победа');
      console.log(chip);
      console.log(enemyChip);
    } else {
      console.log('Поражение');
      console.log(chip);
      console.log(enemyChip);
    }

    new GameView().showGameResult();
  }
}

export default GameModel;
