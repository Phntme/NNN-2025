const score = document.getElementById("score"),
  scoreBtn = document.getElementById("score-btn"),
  upgradeFinger = document.getElementById("upgrade-finger"),
  minusPop = document.querySelector(".currency-minus"),
  minusValue = document.getElementById("minus-value"),
  tapStatus = document.getElementById("tap-status");

// harga upgrade
const fingerCost = 50;

let scorePoint = 0;
let canHold = true,
  canPress = true,
  clickPoint = 1;

// fungsi nambah score
function addScore() {
  score.textContent = scorePoint += clickPoint;
}

// fungsi animasi
function btnAnimation() {
  scoreBtn.classList.add("btn-active");
  setInterval(() => {
    scoreBtn.classList.remove("btn-active");
  }, 100);
}

// fungsi duit kurang bjirla
function duitKurang(kurangBerapa) {
  let kurang = scorePoint - kurangBerapa;
  minusPop.classList.add("show");
  setTimeout(() => {
    minusPop.classList.remove("show");
  }, 1500);
  return Math.abs(kurang);
}

// fungsi upgrade finger training
function fingerUpgrade() {
  clickPoint += 1;
}

// fungsi berhasil upgrade
function berhasilUpgrade(harga) {
  scorePoint -= harga;
  score.textContent = scorePoint;
  fingerUpgrade();
}

// kalo button skor diklik
scoreBtn.addEventListener("click", () => {
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
    }
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code === "Space") {
    canPress = true;
  }
});

// upgrade click
function fingerTraining() {
  if (scorePoint >= fingerCost) {
    berhasilUpgrade(fingerCost);
    tapStatus.textContent = clickPoint;
  } else {
    minusValue.textContent = duitKurang(fingerCost);
  }
}

// kalo upgrade finger diklik
upgradeFinger.addEventListener("click", () => {
  fingerTraining();
});
