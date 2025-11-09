const score = document.getElementById("score"),
  scoreBtn = document.getElementById("score-btn"),
  upgradeFinger = document.getElementById("upgrade-finger"),
  minusPop = document.querySelector(".currency-minus"),
  minusValue = document.getElementById("minus-value"),
  tapValue = document.getElementById("tap-value"),
  tapStatus = document.getElementById("tap-status"),
  gameImg = document.querySelector(".game-image");

// harga upgrade
const fingerCost = 50;

let scorePoint = 0;
let canHold = true,
  canPress = true,
  clickPoint = 1,
  multiplier = 1;

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
  score.textContent = scorePoint += clickPoint;
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
  console.log("hello");
  tapStatus.classList.add("active");
  setTimeout(() => {
    tapStatus.classList.remove("active");
  }, 500);
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
  scorePopup(clickPoint, "+");
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
      scorePopup(clickPoint, "+");
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
      scorePopup(clickPoint, "+");
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
  scorePopup(clickPoint, "+");
});

// upgrade click
function fingerTraining() {
  if (scorePoint >= fingerCost) {
    berhasilUpgrade(fingerCost);
    scorePopup(fingerCost, "-");
    tapAnimation();
    tapValue.textContent = clickPoint;
  } else {
    minusValue.textContent = duitKurang(fingerCost);
  }
}

// kalo upgrade finger diklik
upgradeFinger.addEventListener("click", () => {
  fingerTraining();
});
