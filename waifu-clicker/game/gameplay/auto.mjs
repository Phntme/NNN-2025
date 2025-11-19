import { gameData } from "../data/gameData.mjs";
import { updateUI } from "../ui/updateUI.mjs";
import * as anim from "../ui/animation.mjs";
import { saveGame } from "../data/saveLoad.mjs";

let auto = gameData.upgrade[1].upgradeStatus;

function startAuto() {
  if (auto) {
    clearInterval(auto);
  }

  if (gameData.upgrade[1].upgradeStatus === false) return;

  auto = setInterval(() => {
    const autoScore =
      gameData.upgrade[1].upgradeLevel * gameData.upgrade[2].upgradeLevel;
    gameData.scorePoint += autoScore;
    updateUI();
    anim.scorePopup(autoScore.toFixed(1), "+");

    // cek multiplier aktif ga
    if (gameData.upgrade[2].upgradeLevel === 1) {
    } else {
      anim.multiPopup(gameData.upgrade[2].upgradeLevel);
    }

    saveGame();
  }, gameData.upgrade[1].autoInterval);
}

export { startAuto };
