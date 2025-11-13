const score = document.getElementById("score"),
  scoreBtn = document.getElementById("score-btn"),
  upgradeFinger = document.getElementById("upgrade-finger"),
  upgradeAuto = document.getElementById("upgrade-auto"),
  upgradeMulti = document.getElementById("upgrade-multi"),
  minusPop = document.querySelector(".currency-minus"),
  minusValue = document.getElementById("minus-value"),
  multiValue = document.getElementById("multi-value"),
  tapValue = document.getElementById("tap-value"),
  gameImg = document.querySelector(".game-image"),
  tapStatus = document.getElementById("tap-status"),
  autoStatus = document.getElementById("auto-status"),
  multiStatus = document.getElementById("multi-status"),
  autoValueInfo = document.querySelectorAll(".auto-value"),
  autoIntervalInfo = document.querySelectorAll(".auto-interval"),
  tapPrice = document.getElementById("tap-price"),
  autoPrice = document.getElementById("auto-price"),
  multiPrice = document.getElementById("multi-price");

function c() {
  console.log("hello wrold");
}

//game data
const gameData = {
  scorePoint: 500,
  clickPoint: 1,
  upgrade: [
    {
      upgradeName: "finger",
      upgradeStatus: false,
      upgradeLevel: 1,
      price: 50,
    },
    {
      upgradeName: "auto",
      upgradeStatus: false,
      upgradeLevel: 0,
      autoInterval: 5000,
      price: 200,
    },
    {
      upgradeName: "multi",
      upgradeStatus: false,
      upgradeLevel: 1,
      price: 500,
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
  score.textContent = Math.floor(gameData.scorePoint);
  tapValue.textContent = gameData.upgrade[0].upgradeLevel;
  const autoIntervalData = Math.floor(gameData.upgrade[1].autoInterval);
  const autoValueData = gameData.upgrade[1].upgradeLevel;

  if (gameData.upgrade[1].upgradeStatus) {
    autoIntervalInfo.forEach((span) => {
      span.textContent = autoIntervalData / 1000;
    });
    autoValueInfo.forEach((span) => {
      span.textContent = autoValueData;
    });
  }

  if (gameData.upgrade[2].upgradeStatus) {
    multiValue.textContent = gameData.upgrade[2].upgradeLevel;
  }

  tapPrice.textContent = gameData.upgrade[0].price;
  autoPrice.textContent = gameData.upgrade[1].price;
  multiPrice.textContent = gameData.upgrade[2].price;
}

function inflasi(hargaUpgrade) {
  return Math.floor(hargaUpgrade * 1.05);
}

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

// popup multiplier
function multiPopup(multi) {
  const parent = document.querySelector(".game-header__point");
  const multiPop = document.createElement("div");
  multiPop.classList.add("multi-popup");
  multiPop.textContent = `x ${multi}`;
  parent.appendChild(multiPop);

  setTimeout(() => {
    multiPop.remove();
  }, 1000);
}

// fungsi nambah score
function addScore() {
  score.textContent = gameData.scorePoint +=
    gameData.clickPoint * gameData.upgrade[2].upgradeLevel;
  updateUI();

  saveGame();
  if (gameData.upgrade[2].upgradeLevel === 1) {
  } else {
    multiPopup(gameData.upgrade[2].upgradeLevel);
  }
}

// fungsi animasi
function btnAnimation() {
  scoreBtn.classList.add("btn-active");
  setInterval(() => {
    scoreBtn.classList.remove("btn-active");
  }, 100);
}

//function animasi tap status kalo di upgrade
// variable tuh nama variable elemen yang mau di animasikan
function upgradeAnimation(variable) {
  variable.classList.add("active");
  setTimeout(() => {
    variable.classList.remove("active");
  }, 500);
}

// fungsi duit kurang bjirla
function duitKurang(kurangBerapa) {
  let kurang = gameData.scorePoint - kurangBerapa;
  minusPop.classList.add("show");
  setTimeout(() => {
    minusPop.classList.remove("show");
  }, 1500);
  return Math.floor(Math.abs(kurang));
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

// fungsi upgrade multiplier
function multiUpgrade() {
  gameData.upgrade[2].upgradeStatus = true;
  gameData.upgrade[2].upgradeLevel += 0.25;
}

// fungsi berhasil upgrade
function berhasilUpgrade(harga, tipeUpgrade) {
  gameData.scorePoint -= harga;
  score.textContent = gameData.scorePoint;
  if (tipeUpgrade === "finger") {
    fingerUpgrade();
    upgradeAnimation(tapStatus);
    gameData.upgrade[0].price = inflasi(gameData.upgrade[0].price);
  } else if (tipeUpgrade === "auto") {
    upgradeAnimation(autoStatus);
    autoUpgrade();
    gameData.upgrade[1].price = inflasi(gameData.upgrade[1].price);
  } else if (tipeUpgrade === "multi") {
    upgradeAnimation(multiStatus);
    multiUpgrade();
    gameData.upgrade[2].price = inflasi(gameData.upgrade[2].price);
  }
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
    updateUI();
    scorePopup(hargaUpgrade, "-");
    saveGame();
    tapValue.textContent = gameData.clickPoint;
  } else {
    minusValue.textContent = duitKurang(hargaUpgrade);
  }
}

// upgrade finger training
function fingerTraining() {
  checkUpg(gameData.upgrade[0].price, 0);
}

// upgrade auto click
function sugarBoost() {
  checkUpg(gameData.upgrade[1].price, 1);
}

// check bisa upgrade multi gak
function lovePower() {
  checkUpg(gameData.upgrade[2].price, 2);
}
// kalo upgrade finger diklik
upgradeFinger.addEventListener("click", () => {
  fingerTraining();
});

// kalo upgrade auto diklik
upgradeAuto.addEventListener("click", () => {
  sugarBoost();
});

upgradeMulti.addEventListener("click", () => {
  lovePower();
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
