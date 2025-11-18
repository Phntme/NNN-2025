import { gameData } from "../data/gameData.mjs";
import { updateUI } from "../ui/updateUI.mjs";
import { saveGame } from "../data/saveLoad.mjs";
import * as anim from "../ui/animation.mjs";

// ngecek kekuatan click
function getClickPower() {
  return gameData.upgrade[0].upgradeLevel * gameData.upgrade[2].upgradeLevel;
}

// fungsi nambah score
function addScore() {
  score.textContent = gameData.scorePoint += getClickPower();
  anim.scorePopup(Math.floor(getClickPower()), "+");

  updateUI();

  saveGame();
  if (gameData.upgrade[2].upgradeLevel === 1) {
  } else {
    anim.multiPopup(gameData.upgrade[2].upgradeLevel);
  }
}

export { addScore };
