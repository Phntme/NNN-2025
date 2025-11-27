import { gameData } from "./gameData.mjs";
import { updateUI } from "../ui/updateUI.mjs";
import { startAuto } from "../gameplay/auto.mjs";

// save game function
export function saveGame() {
  const gameSaveData = JSON.stringify(gameData);
  localStorage.setItem("waifuData", gameSaveData);
}

// load game function
export function loadGame() {
  const rawData = localStorage.getItem("waifuData");

  if (!rawData) return saveGame();

  const loadedData = JSON.parse(rawData);
  Object.assign(gameData, loadedData);
  updateUI();
  startAuto();
}

export function initUpgradeAnimations() {
  gameData.upgrade.find((upgrade) => upgrade.upgradeName === "tap").animation =
    document.getElementById("tap-status");

  gameData.upgrade.find((upgrade) => upgrade.upgradeName === "auto").animation =
    document.getElementById("auto-status");

  gameData.upgrade.find(
    (upgrade) => upgrade.upgradeName === "multi"
  ).animation = document.getElementById("multi-status");
}
