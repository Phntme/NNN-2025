import { charPool } from "../data/charData.mjs";
import { gameData } from "../data/gameData.mjs";
import { duitKurang } from "./economy.mjs";
import { showResult } from "../ui/warpPanel.mjs";
import * as anim from "../ui/animation.mjs";
import { updateUI } from "../ui/updateUI.mjs";

function warpHandler(pullType) {
  if (pullType === "single") {
    if (checkWarp(singleCost, gameData.scorePoint)) {
      berhasilWarp(singleCost);
      singlePull();
      anim.doWarpAnimation();
      showResult();
    } else {
      duitKurang(singleCost);
    }
  } else {
    if (checkWarp(multiCost, gameData.scorePoint)) {
      berhasilWarp(multiCost);
      multiPull();
      anim.doWarpAnimation();
      showResult;
    } else {
      duitKurang(multiCost);
    }
  }

  updateUI();
}

const singleCost = gameData.warp.price.single;
const multiCost = gameData.warp.price.multi;

function berhasilWarp(harga) {
  gameData.scorePoint -= harga;
}

function checkWarp(warpCost, userPoint) {
  if (userPoint >= warpCost) {
    return true;
  } else return false;
}

function getRandomFrom(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function singlePull() {
  let chance = Math.random() * 100;
  console.log(chance);
  if (chance <= 1) {
    console.log(getRandomFrom(charPool[5]));
  } else if (chance <= 11) {
    console.log(getRandomFrom(charPool[4]));
  } else {
    console.log(getRandomFrom(charPool[3]));
  }
}

function multiPull() {
  for (let multi = 0; multi < 10; multi++) {
    singlePull();
  }
}

export { warpHandler };
