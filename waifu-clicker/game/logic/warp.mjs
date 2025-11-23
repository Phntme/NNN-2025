import { charPool } from "../data/charData.mjs";
import { gameData } from "../data/gameData.mjs";
import { doWarpAnimation } from "../ui/animation.mjs";

function warpHandler(pullType) {
  if (pullType === "single") {
    if (checkWarp(singleCost, gameData.scorePoint)) {
      singlePull();
      doWarpAnimation();
    }
  }
}

const singleCost = 1000;
const multiCost = singleCost * 10;

function checkWarp(warpCost, userPoint) {
  if (userPoint >= warpCost) return true;
  else return false;
}

function getRandomFrom(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function singlePull() {
  let chance = Math.floor(Math.random() * 100);
  if (chance <= 100) {
    console.log(getRandomFrom(charPool[5]));
  }
}

export { warpHandler };
