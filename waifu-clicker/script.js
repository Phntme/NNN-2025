const score = document.getElementById("score"),
  scoreBtn = document.getElementById("score-btn"),
  upgradeFinger = document.getElementById("upgrade-finger"),
  minusPop = document.querySelector(".currency-minus"),
  minusValue = document.getElementById("minus-value"),
  tapValue = document.getElementById("tap-value"),
  tapStatus = document.getElementById("tap-status"),
  gameImg = document.querySelector(".game-image");

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

function updateUI() {
  score.textContent = gameData.scorePoint;
  tapValue.textContent = gameData.upgrade[0].upgradeLevel;
}

// harga upgrade
const fingerCost = 50;

let canHold = true,
  canPress = true;

// pop up score
function scorePopup(number, operasi) {
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

// fungsi berhasil upgrade
function berhasilUpgrade(harga) {
  gameData.scorePoint -= harga;
  score.textContent = gameData.scorePoint;
  fingerUpgrade();
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

// upgrade click
function fingerTraining() {
  if (gameData.scorePoint >= fingerCost) {
    berhasilUpgrade(fingerCost);
    scorePopup(fingerCost, "-");
    tapAnimation();
    tapValue.textContent = gameData.clickPoint;
  } else {
    minusValue.textContent = duitKurang(fingerCost);
  }
}

// kalo upgrade finger diklik
upgradeFinger.addEventListener("click", () => {
  fingerTraining();
});

// cheat for development only
// document.addEventListener("keypress", (event) => {
//   if (event.code === "KeyA") {
//     gameData.scorePoint = 99999;
//     alert("cheat aktif");
//   }
// });
