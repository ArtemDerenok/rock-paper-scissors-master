/* eslint-disable no-constructor-return */
class GameView {
  static #instance = null;

  #gameField;

  static #baseField = `
  <img src="./images/bg-pentagon.svg" alt="pentagon">
  <div class="game__scissor chip" data-chip="scissor">
    <div class="chip__circle"><img src="./images/icon-scissors.svg" alt="scissors"></div>
  </div>
  <div class="game__paper chip" data-chip="paper">
    <div class="chip__circle"><img src="./images/icon-paper.svg" alt="paper"></div>
  </div>
  <div class="game__rock chip" data-chip="rock">
    <div class="chip__circle"><img src="./images/icon-rock.svg" alt="rock"></div>
  </div>
  <div class="game__lizard chip" data-chip="lizard">
    <div class="chip__circle"><img src="./images/icon-lizard.svg" alt="lizard"></div>
  </div>
  <div class="game__spock chip" data-chip="spock">
    <div class="chip__circle"><img src="./images/icon-spock.svg" alt="spock"></div>
  </div>`;

  constructor() {
    if (GameView.#instance) {
      return GameView.#instance;
    }

    this.#gameField = document.getElementById('gameField');

    GameView.#instance = this;
  }

  #clearField() {
    this.#gameField.innerHTML = '';
  }

  showGameResult() {
    this.#clearField();

    this.#gameField.innerHTML = `
  <div class="game__spock_gradient chip" data-chip="spock">
    <div class="chip__circle"><img src="./images/icon-spock.svg" alt="spock"></div>
  </div>
  <div class="game__spock_gradient chip" data-chip="spock">
    <div class="chip__circle"><img src="./images/icon-spock.svg" alt="spock"></div>
  </div>`;
  }
}

export default GameView;
