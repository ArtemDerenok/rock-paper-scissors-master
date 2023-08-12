class GameView {
  static #instance = null;

  #gameField;

  #score;

  #baseField = `
  <img src="./images/bg-pentagon.svg" alt="pentagon">
  <div class="game__scissor game__scissor_gradient chip" data-chip="scissor">
    <div class="chip__circle"><img src="./images/icon-scissor.svg" alt="scissor"></div>
  </div>
  <div class="game__paper game__paper_gradient chip" data-chip="paper">
    <div class="chip__circle"><img src="./images/icon-paper.svg" alt="paper"></div>
  </div>
  <div class="game__rock game__rock_gradient chip" data-chip="rock">
    <div class="chip__circle"><img src="./images/icon-rock.svg" alt="rock"></div>
  </div>
  <div class="game__lizard game__lizard_gradient chip" data-chip="lizard">
    <div class="chip__circle"><img src="./images/icon-lizard.svg" alt="lizard"></div>
  </div>
  <div class="game__spock game__spock_gradient chip" data-chip="spock">
    <div class="chip__circle"><img src="./images/icon-spock.svg" alt="spock"></div>
  </div>`;

  constructor() {
    if (GameView.#instance) {
      return GameView.#instance;
    }

    this.#gameField = document.getElementById('gameField');
    this.#score = document.getElementById('score');

    GameView.#instance = this;
  }

  #clearField() {
    this.#gameField.innerHTML = '';
  }

  changeScore(score) {
    this.#score.innerText = score;
  }

  showChipsField() {
    this.#clearField();
    this.#gameField.innerHTML = this.#baseField;
  }

  showGameResult(result, chip, enemyChip) {
    this.#clearField();

    this.#gameField.innerHTML = `
  <div class="game__finishBox">  
    <div class="game__chip">
    <h4>YOU PICKED</h4>
    <div class="game__${chip}_gradient chip" data-chip="${chip}">
      <div class="chip__circle"><img src="./images/icon-${chip}.svg" alt="${chip}"></div>
    </div>
    </div>
    <div class="game__resultBox">
      <h2 class="game__resultTitle">${
        result === 'win' ? 'YOU WIN' : result === 'lose' ? 'YOU LOSE' : 'DRAW'
      }</h2>
      <button class="game__playBtn" id="playAgain">PLAY AGAIN</button> 
    </div>
    <div class="game__enemyChip">
    <h4>THE HOUSE PICKED</h4>
    <div class="game__${enemyChip}_gradient chip" data-chip="${enemyChip}">
      <div class="chip__circle"><img src="./images/icon-${enemyChip}.svg" alt="${enemyChip}"></div>
    </div>
    </div>
  </div>`;
  }
}

export default GameView;
