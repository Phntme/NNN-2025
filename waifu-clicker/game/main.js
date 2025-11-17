import { element } from "./data/domData.mjs";
import { gameData } from "./data/gameData.mjs";
import { loadGame } from "./data/saveLoad.mjs";
import { addScore } from "./gameplay/tap.mjs";
import { upgradeHandler } from "./gameplay/logic.mjs";
import * as anim from "./ui/animation.mjs";

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
