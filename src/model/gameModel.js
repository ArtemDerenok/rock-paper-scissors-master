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

  #score = 0;

  constructor() {
    if (GameModel.#instance) {
      return GameModel.#instance;
    }
    GameModel.#instance = this;
  }

  #changeScore(newScore) {
    this.#score += newScore;
    new GameView().changeScore(this.#score);
  }

  getWinner(chip) {
    const randomNum = getRandomNum(0, this.#chipArray.length - 1);
    const enemyChip = this.#chipArray[randomNum];

    if (chip === enemyChip) {
      new GameView().showGameResult('draw', chip, enemyChip);
    } else if (this.#beatsMap[chip].includes(enemyChip)) {
      new GameView().showGameResult('win', chip, enemyChip);
      this.#changeScore(1);
    } else {
      new GameView().showGameResult('lose', chip, enemyChip);
      this.#changeScore(-1);
    }
  }
}

export default GameModel;
