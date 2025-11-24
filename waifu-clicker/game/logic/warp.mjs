import { charPool } from "../data/charData.mjs";
import { gameData } from "../data/gameData.mjs";
import { doWarpAnimation } from "../ui/animation.mjs";

function warpHandler(pullType) {
  if (pullType === "single") {
    if (checkWarp(singleCost, gameData.scorePoint)) {
      singlePull();
      doWarpAnimation();
    } else {
      console.log("duit kurang");
    }
  } else {
    if (checkWarp(multiCost, gameData.scorePoint)) {
      multiPull();
      doWarpAnimation();
    } else {
      console.log("duit kurang");
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
