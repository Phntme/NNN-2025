import { element } from "./data/domData.mjs";
import { gameData } from "./data/gameData.mjs";
import { saveGame, loadGame } from "./data/saveLoad.mjs";
import { addScore } from "./gameplay/tap.mjs";
import * as anim from "./ui/animation.mjs";
import * as logic from "./gameplay/logic.mjs";

loadGame();

let canHold = true,
  canPress = true;

// kalo button 'tap' diklik
element.scoreBtn.addEventListener("click", () => {
  anim.scorePopup(gameData.clickPoint, "+");
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
      anim.scorePopup(gameData.clickPoint, "+");
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
      anim.scorePopup(gameData.clickPoint, "+");
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
  anim.scorePopup(gameData.clickPoint, "+");
});

// kalo upgrade finger diklik
element.upgradeBtn.tap.addEventListener("click", () => {
  logic.checkUpg(gameData.upgrade[0].price, 0);
});

// kalo upgrade auto diklik
element.upgradeBtn.auto.addEventListener("click", () => {
  logic.checkUpg(gameData.upgrade[1].price, 1);
});

// kalo upgrade multi diklik
element.upgradeBtn.multi.addEventListener("click", () => {
  logic.checkUpg(gameData.upgrade[2].price, 2);
});
