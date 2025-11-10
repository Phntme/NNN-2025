const score = document.getElementById("score"),
  scoreBtn = document.getElementById("score-btn"),
  upgradeFinger = document.getElementById("upgrade-finger"),
  upgradeAuto = document.getElementById("upgrade-auto"),
  minusPop = document.querySelector(".currency-minus"),
  minusValue = document.getElementById("minus-value"),
  tapValue = document.getElementById("tap-value"),
  tapStatus = document.getElementById("tap-status"),
  gameImg = document.querySelector(".game-image"),
  autoValueInfo = document.querySelectorAll(".auto-value"),
  autoIntervalInfo = document.querySelectorAll(".auto-interval");

//game data
const gameData = {
  scorePoint: 0,
  clickPoint: 1,
  multiplier: 1,
  upgrade: [
    {
      upgradeName: "finger",
      upgradeStatus: false,
      upgradeLevel: 1,
    },
    {
      upgradeName: "auto",
      upgradeStatus: false,
      upgradeLevel: 0,
      autoInterval: 5000,
    },
  ],
};

loadGame();

// save game function
function saveGame() {
  const gameSaveData = JSON.stringify(gameData);
  localStorage.setItem("wai-fu!dataGame", gameSaveData);
}

// load game function
function loadGame() {
  const rawData = localStorage.getItem("wai-fu!dataGame");

  if (!rawData) return;

  const loadedData = JSON.parse(rawData);
  Object.assign(gameData, loadedData);
  updateUI();
}

// UPDATE UI
function updateUI() {
  score.textContent = gameData.scorePoint;
  tapValue.textContent = gameData.upgrade[0].upgradeLevel;
  const autoIntervalData = Math.floor(gameData.upgrade[1].autoInterval);
  const autoValueData = gameData.upgrade[1].upgradeLevel;
  autoIntervalInfo.forEach((span) => {
    span.textContent = autoIntervalData / 1000;
  });
  autoValueInfo.forEach((span) => {
    span.textContent = autoValueData;
  });
}

// harga upgrade
const fingerCost = 50,
  sugarCost = 200;

let canHold = true,
  canPress = true;

// pop up score
function scorePopup(number, operasi) {
  if (number === 0) return;
  const scorePop = document.createElement("div");
  scorePop.classList.add("score-popup");
  if (operasi === "-") {
    scorePop.classList.add("minus");
  }
  scorePop.textContent = `${operasi} ${number}`;
  gameImg.appendChild(scorePop);

  setTimeout(() => {
    scorePop.remove();
  }, 1000);
}

// fungsi nambah score
function addScore() {
  score.textContent = gameData.scorePoint += gameData.clickPoint;
  saveGame();
}

// fungsi animasi
function btnAnimation() {
  scoreBtn.classList.add("btn-active");
  setInterval(() => {
    scoreBtn.classList.remove("btn-active");
  }, 100);
}

//function animasi tap status kalo di upgrade
function tapAnimation() {
  tapStatus.classList.add("active");
  setTimeout(() => {
    tapStatus.classList.remove("active");
  }, 500);
}

// fungsi duit kurang bjirla
function duitKurang(kurangBerapa) {
  let kurang = gameData.scorePoint - kurangBerapa;
  minusPop.classList.add("show");
  setTimeout(() => {
    minusPop.classList.remove("show");
  }, 1500);
  return Math.abs(kurang);
}

// fungsi upgrade finger training
function fingerUpgrade() {
  gameData.clickPoint = gameData.upgrade[0].upgradeLevel += 1;
  gameData.upgrade[0].upgradeStatus = true;
}

// fungsi upgrade auto
function autoUpgrade() {
  gameData.upgrade[1].upgradeStatus = true;
  gameData.upgrade[1].upgradeLevel += 0.5;
}

// interval upgrade auto
setInterval(() => {
  gameData.scorePoint += gameData.upgrade[1].upgradeLevel;
  updateUI();
  scorePopup(gameData.upgrade[1].upgradeLevel, "+");
}, gameData.upgrade[1].autoInterval);

// fungsi berhasil upgrade
function berhasilUpgrade(harga, tipeUpgrade) {
  gameData.scorePoint -= harga;
  score.textContent = gameData.scorePoint;
  if (tipeUpgrade === "finger") {
    fingerUpgrade();
    tapAnimation();
  } else if (tipeUpgrade === "auto") {
    autoUpgrade();
  }
  saveGame();
}

// kalo button skor diklik
scoreBtn.addEventListener("click", () => {
  scorePopup(gameData.clickPoint, "+");
  btnAnimation();
  addScore();
});

document.addEventListener("keydown", function (event) {
  // ini kalo klik H, bisa hold
  if (event.code === "KeyH") {
    if (canHold) {
      canHold = false;
      btnAnimation();
      addScore();
      scorePopup(gameData.clickPoint, "+");
      setTimeout(() => {
        canHold = true;
      }, 500);
    }
  }

  // ini kalo klik spasi
  if (event.code === "Space") {
    event.preventDefault();
    if (canPress) {
      canPress = false;
      btnAnimation();
      addScore();
      scorePopup(gameData.clickPoint, "+");
    }
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    canPress = true;
  }
});

gameImg.addEventListener("click", () => {
  addScore();
  scorePopup(gameData.clickPoint, "+");
});

// cek bisa upgrade gak
function checkUpg(hargaUpgrade, indexUpgrade) {
  if (gameData.scorePoint >= hargaUpgrade) {
    berhasilUpgrade(hargaUpgrade, gameData.upgrade[indexUpgrade].upgradeName);
    scorePopup(hargaUpgrade, "-");
    tapValue.textContent = gameData.clickPoint;
  } else {
    minusValue.textContent = duitKurang(hargaUpgrade);
  }
}

// upgrade finger training
function fingerTraining() {
  checkUpg(fingerCost, 0);
}

// upgrade auto click
function sugarBoost() {
  checkUpg(sugarCost, 1);
}

// kalo upgrade finger diklik
upgradeFinger.addEventListener("click", () => {
  fingerTraining();
});

// kalo upgrade auto diklik
upgradeAuto.addEventListener("click", () => {
  sugarBoost();
});

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
