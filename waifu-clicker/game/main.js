import { element } from "./data/domData.mjs";
import { loadGame, initUpgradeAnimations } from "./data/saveLoad.mjs";
import { addScore } from "./gameplay/tap.mjs";
import { upgradeHandler } from "./logic/economy.mjs";
import { showPanel, switchPanel } from "./ui/panel.mjs";
import { warpHandler } from "./logic/warp.mjs";
import { gameData } from "./data/gameData.mjs";
import * as anim from "./ui/animation.mjs";
import { updateUI } from "./ui/updateUI.mjs";
import { warpInflation } from "./ui/panel.mjs";

loadGame();
window.addEventListener("DOMContentLoaded", () => {
  initUpgradeAnimations();
});

let canHold = true,
  canPress = true;

// kalo button 'tap' diklik
element.scoreBtn.addEventListener("click", () => {
  anim.btnAnimation();
  addScore();
});

document.addEventListener("keydown", function (event) {
  // ini kalo klik H, bisa hold
  if (event.code === "KeyH") {
    if (canHold) {
      canHold = false;
      anim.btnAnimation();
      addScore();
      setTimeout(() => {
        canHold = true;
      }, 500);
    }
  }

  // ini kalo klik spasi
  if (event.code === "Space") {
    event.preventDefault();
    if (canPress) {
      canPress = false;
      anim.btnAnimation();
      addScore();
    }
  }
});

// biar gabisa hold pake spasi
document.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    canPress = true;
  }
});

// kalo user tap di bagian gambar
element.gameImg.addEventListener("click", () => {
  addScore();
});

// kalo upgrade finger diklik
element.upgradeBtn.tap.addEventListener("click", () => {
  upgradeHandler("tap");
});

// kalo upgrade auto diklik
element.upgradeBtn.auto.addEventListener("click", () => {
  upgradeHandler("auto");
});

// kalo upgrade multi diklik
element.upgradeBtn.multi.addEventListener("click", () => {
  upgradeHandler("multi");
});

element.featureBtn.upgrade.addEventListener("click", () => {
  showPanel(element.panel.gameplay);
});

element.featureBtn.warp.addEventListener("click", () => {
  showPanel(element.panel.warp);
  warpInflation();
  updateUI();
});

element.switch.limited.addEventListener("click", () => {
  switchPanel(element.gachaImg.limited, element.switch.limited);
});

element.switch.standart.addEventListener("click", () => {
  switchPanel(element.gachaImg.standart, element.switch.standart);
});

element.gachaBtn.single.addEventListener("click", () => {
  warpHandler("single");
});

element.gachaBtn.multi.addEventListener("click", () => {
  warpHandler("multi");
});

// dev area
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyX") {
    function cheat() {
      gameData.scorePoint += 900000000000;
    }

    cheat();

    updateUI();
  }
});
