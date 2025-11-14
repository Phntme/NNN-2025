import { gameData } from "./gameData.mjs";
import { updateUI } from "../ui/updateUI.mjs";
import { startAuto } from "../gameplay/auto.mjs";

// save game function
export function saveGame() {
  const gameSaveData = JSON.stringify(gameData);
  localStorage.setItem("wai-fu!dataGame", gameSaveData);
}

// load game function
export function loadGame() {
  const rawData = localStorage.getItem("wai-fu!dataGame");

  if (!rawData) return saveGame();

  const loadedData = JSON.parse(rawData);
  Object.assign(gameData, loadedData);
  updateUI();
  startAuto();
}
