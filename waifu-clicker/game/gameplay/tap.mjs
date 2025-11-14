import { gameData } from "../data/gameData.mjs";
import { updateUI } from "../ui/updateUI.mjs";
import { saveGame } from "../data/saveLoad.mjs";
import * as anim from "../ui/animation.mjs";

// fungsi nambah score
function addScore() {
  score.textContent = gameData.scorePoint +=
    gameData.clickPoint * gameData.upgrade[2].upgradeLevel;
  updateUI();

  saveGame();
  if (gameData.upgrade[2].upgradeLevel === 1) {
  } else {
    anim.multiPopup(gameData.upgrade[2].upgradeLevel);
  }
}

export { addScore };
