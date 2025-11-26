import { gameData } from "../data/gameData.mjs";
import { element } from "../data/domData.mjs";
import { saveGame } from "../data/saveLoad.mjs";

// function ngeformat
function formatNumber(number) {
  if (number < 1000) return Math.floor(number);

  // unit buat format
  const unit = [
    { value: 1e18, symbol: "Qi" },
    { value: 1e15, symbol: "Qa" },
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" },
  ];

  for (let i = 0; i < unit.length; i++) {
    if (number >= unit[i].value) {
      return (
        (number / unit[i].value).toFixed(1).replace(/\.0$/, "") + unit[i].symbol
      );
    }
  }
}

// UPDATE UI
export function updateUI() {
  element.score.textContent = formatNumber(gameData.scorePoint);
  element.gameValue.tap.textContent = gameData.upgrade[0].upgradeLevel;

  if (gameData.upgrade[1].upgradeStatus) {
    element.gameValue.auto.textContent = gameData.upgrade[1].upgradeLevel;
    element.gameValue.interval.textContent =
      gameData.upgrade[1].autoInterval / 1000;
  }

  if (gameData.upgrade[2].upgradeStatus) {
    element.gameValue.multi.textContent = gameData.upgrade[2].upgradeLevel;
  }

  element.upgradePrice.tap.textContent = formatNumber(
    gameData.upgrade[0].price
  );
  element.upgradePrice.auto.textContent = formatNumber(
    gameData.upgrade[1].price
  );
  element.upgradePrice.multi.textContent = formatNumber(
    gameData.upgrade[2].price
  );

  element.gachaBtn.single.textContent = formatNumber(
    gameData.warp.price.single * gameData.warp.globalInflation
  );
  element.gachaBtn.multi.textContent = formatNumber(
    gameData.warp.price.multi * gameData.warp.globalInflation
  );
  saveGame();
}
