import { gameData } from "../data/gameData.mjs";
import { startAuto } from "./auto.mjs";

// fungsi upgrade tap
function tap() {
  gameData.clickPoint = gameData.upgrade[0].upgradeLevel += 1;
  gameData.upgrade[0].upgradeStatus = true;
}

// fungsi upgrade auto
function auto() {
  gameData.upgrade[1].upgradeStatus = true;
  gameData.upgrade[1].upgradeLevel += 0.5;

  startAuto();
}

// fungsi upgrade multiplier
function multi() {
  gameData.upgrade[2].upgradeStatus = true;
  gameData.upgrade[2].upgradeLevel += 0.25;
}

export { tap, auto, multi };
