import { gameData } from "../data/gameData.mjs";
import * as upgrade from "./upgrade.mjs";
import * as anim from "../ui/animation.mjs";
import { element } from "../data/domData.mjs";
import { updateUI } from "../ui/updateUI.mjs";
import { loadGame, saveGame } from "../data/saveLoad.mjs";

// cek bisa upgrade gak
function checkUpg(hargaUpgrade, indexUpgrade) {
  if (gameData.scorePoint >= hargaUpgrade) {
    berhasilUpgrade(hargaUpgrade, gameData.upgrade[indexUpgrade].upgradeName);
    updateUI();
    anim.scorePopup(hargaUpgrade, "-");
    saveGame();
    element.gameValue.tap.textContent = gameData.clickPoint;
  } else {
    element.gameValue.minus.textContent = duitKurang(hargaUpgrade);
  }
}

// kalo berhasil upgrade
function berhasilUpgrade(harga, tipeUpgrade) {
  gameData.scorePoint -= harga;
  score.textContent = gameData.scorePoint;
  if (tipeUpgrade === "finger") {
    upgrade.tap();
    anim.upgradeAnimation(element.gameStatus.tap);
    gameData.upgrade[0].price = inflasi(gameData.upgrade[0].price);
  } else if (tipeUpgrade === "auto") {
    upgrade.auto();
    anim.upgradeAnimation(element.gameStatus.auto);
    gameData.upgrade[1].price = inflasi(gameData.upgrade[1].price);
  } else if (tipeUpgrade === "multi") {
    upgrade.multi();
    anim.upgradeAnimation(element.gameStatus.multi);
    gameData.upgrade[2].price = inflasi(gameData.upgrade[2].price);
  }
}

// harga naek 7% tiap upgrade
function inflasi(hargaUpgrade) {
  return Math.floor(hargaUpgrade * 1.07);
}

// kalo duit kurang
function duitKurang(kurangBerapa) {
  let kurang = gameData.scorePoint - kurangBerapa;
  element.popup.minus.classList.add("show");
  setTimeout(() => {
    element.popup.minus.classList.remove("show");
  }, 1500);
  return Math.floor(Math.abs(kurang));
}

export { checkUpg, berhasilUpgrade, inflasi, duitKurang };
