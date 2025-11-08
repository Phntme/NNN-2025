const score = document.getElementById("score"),
  scoreBtn = document.getElementById("score-btn");

let scorePoint = 0;
let canHold = true,
  canPress = true;

function addScore() {
  score.textContent = scorePoint += 1;
}

function btnAnimation() {
  scoreBtn.classList.add("btn-active");
  setInterval(() => {
    scoreBtn.classList.remove("btn-active");
  }, 100);
}

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
