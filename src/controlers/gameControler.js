import GameModel from '../model/gameModel';
import GameView from '../view/gameView';

class GameControler {
  static #instance = null;

  #gameField;

  #modalBackground;

  #modal;

  #rulesBtn;

  #cross;

  constructor() {
    if (GameControler.#instance) {
      return GameControler.#instance;
    }
    this.#modal = document.getElementById('rulesModal');
    this.#modalBackground = document.getElementById('background');
    this.#rulesBtn = document.getElementById('rulesBtn');
    this.#gameField = document.getElementById('gameField');
    this.#cross = document.getElementById('cross');

    this.#rulesControl();
    this.#chipControl();

    GameControler.#instance = this;
  }

  #rulesControl() {
    this.#rulesBtn.addEventListener('click', () => {
      this.#modalBackground.classList.toggle('hide');
      this.#modal.classList.toggle('hide');
    });

    this.#modalBackground.addEventListener('click', () => {
      this.#modalBackground.classList.toggle('hide');
      this.#modal.classList.toggle('hide');
    });

    this.#cross.addEventListener('click', () => {
      this.#modalBackground.classList.toggle('hide');
      this.#modal.classList.toggle('hide');
    });
  }

  #chipControl() {
    this.#gameField.addEventListener('click', (event) => {
      let chipType = event.target.dataset.chip;
      if (chipType) {
        return new GameModel().getWinner(chipType);
      }
      chipType = event.target.offsetParent.dataset.chip;

      if (chipType) {
        return new GameModel().getWinner(chipType);
      }

      if (event.target.id === 'playAgain') {
        return new GameView().showChipsField();
      }
      return false;
    });
  }
}

export default GameControler;
