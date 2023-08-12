import GameModel from '../model/gameModel';

class GameControler {
  static #instance = null;

  #gameField;

  constructor() {
    if (GameControler.#instance) {
      return GameControler.#instance;
    }
    this.#gameField = document.getElementById('gameField');
    this.#chipControl();
    GameControler.#instance = this;
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
      return false;
    });
  }
}

export default GameControler;
