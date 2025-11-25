import { gameData } from "../data/gameData.mjs";
import * as anim from "../ui/animation.mjs";
import { element } from "../data/domData.mjs";
import { updateUI } from "../ui/updateUI.mjs";
import { saveGame } from "../data/saveLoad.mjs";
import { startAuto } from "../gameplay/auto.mjs";

// ngecek upgrade apa yang dipilih user
function getUpgradeName(name) {
  return gameData.upgrade.find((upg) => upg.upgradeName === name);
}

// cek bisa upgrade gak
function checkUpg(price) {
  if (gameData.scorePoint >= price) {
    return true;
  } else {
    return false;
  }
}

// kalo berhasil upgrade
function berhasilUpgrade(harga, upgrade) {
  gameData.scorePoint -= harga;
  let upgradeName = upgrade.upgradeName;

  upgrade.upgradeLevel +=
    upgradeName === "auto" ? 0.5 : upgradeName === "multi" ? 0.25 : 1;
}

// harga naek 7% tiap upgrade
function inflasi(level, hargaUpgrade) {
  let inflasi;
  if (level >= 60) {
    inflasi = 1.2;
  } else if (level >= 40) {
    inflasi = 1.15;
  } else if (level >= 20) {
    inflasi = 1.1;
  } else {
    inflasi = 1.07;
  }
  return Math.floor(hargaUpgrade * inflasi);
}

// kalo duit kurang
function duitKurang(kurangBerapa) {
  let kurang = gameData.scorePoint - kurangBerapa;
  element.gameValue.minus.textContent = Math.floor(Math.abs(kurang));
  element.popup.minus.classList.add("showmin");
  setTimeout(() => {
    element.popup.minus.classList.remove("showmin");
  }, 1500);
}

function upgradeHandler(namaUpgrade) {
  const upgrade = getUpgradeName(namaUpgrade);
  const name = upgrade.upgradeName;

  if (checkUpg(upgrade.price)) {
    berhasilUpgrade(upgrade.price, upgrade);
    upgrade.upgradeStatus = true;
    if (name === "auto") {
      startAuto();
    }
    anim.upgradeAnimation(upgrade.animation);
    anim.scorePopup(upgrade.price, "-");
    upgrade.price = inflasi(upgrade.upgradeLevel, upgrade.price);
  } else {
    duitKurang(upgrade.price);
  }

  saveGame();
  updateUI();
}

export { upgradeHandler, duitKurang };
