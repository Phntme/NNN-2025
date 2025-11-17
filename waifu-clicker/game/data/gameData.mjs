export const gameData = {
  scorePoint: 500,
  upgrade: [
    {
      upgradeName: "tap",
      upgradeStatus: false,
      upgradeLevel: 1,
      price: 50,
      animation: document.getElementById("tap-status"),
    },
    {
      upgradeName: "auto",
      upgradeStatus: false,
      upgradeLevel: 0,
      autoInterval: 5000,
      price: 200,
      animation: document.getElementById("auto-status"),
    },
    {
      upgradeName: "multi",
      upgradeStatus: false,
      upgradeLevel: 1,
      price: 500,
      animation: document.getElementById("multi-status"),
    },
  ],
};
