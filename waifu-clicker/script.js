const autoIntervalInfo = document.querySelectorAll(".auto-interval");

function c() {
  console.log("hello wrold");
}

loadGame();

// interval upgrade auto
setInterval(() => {
  if (gameData.upgrade[1].upgradeLevel === 0) return;

  gameData.scorePoint +=
    gameData.upgrade[1].upgradeLevel * gameData.upgrade[2].upgradeLevel;
  updateUI();
  scorePopup(gameData.upgrade[1].upgradeLevel, "+");

  if (gameData.upgrade[2].upgradeLevel === 1) {
  } else {
    multiPopup(gameData.upgrade[2].upgradeLevel);
  }
}, gameData.upgrade[1].autoInterval);

// upgrade finger training
function fingerTraining() {}

// upgrade auto click
function sugarBoost() {
  checkUpg(gameData.upgrade[1].price, 1);
}

// check bisa upgrade multi gak
function lovePower() {
  checkUpg(gameData.upgrade[2].price, 2);
}

// dev area

// cheat
// document.addEventListener("keypress", (event) => {
//   if (event.code === "KeyA") {
//     gameData.scorePoint = 99999;
//     alert("cheat aktif");
//   }
// });
// reset
function reset() {
  let resetQ = confirm("yakin mau reset");
  if (resetQ) {
    localStorage.clear();
  }
}
