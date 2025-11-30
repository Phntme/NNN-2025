import { charPool } from "../data/charData.mjs";
import { gameData } from "../data/gameData.mjs";
import { duitKurang } from "./economy.mjs";
import { showResult } from "../ui/warpPanel.mjs";
import * as anim from "../ui/animation.mjs";
import { updateUI } from "../ui/updateUI.mjs";
import { element } from "../data/domData.mjs";

function warpHandler(pullType) {
  let singleCost = gameData.warp.price.single;
  let multiCost = gameData.warp.price.multi;
  let resultNow = [];

  if (pullType === "single") {
    if (checkWarp(singleCost, gameData.scorePoint)) {
      berhasilWarp(singleCost);
      resultNow.push(singlePull());
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
  console.log(resultNow[0].name);

  element.warp.name.textContent = resultNow[0].name;
  element.warp.rarity.textContent = resultNow[0].rarity;
  element.warp.img.src = resultNow[0].source;

  updateUI();
}

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
  if (chance <= 1) {
    return getRandomFrom(charPool[5]);
  } else if (chance <= 11) {
    return getRandomFrom(charPool[4]);
  } else {
    return getRandomFrom(charPool[3]);
  }
}

function multiPull() {
  for (let multi = 0; multi < 10; multi++) {
    singlePull();
  }
}

export { warpHandler };
