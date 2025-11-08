const score = document.getElementById("score"),
  scoreBtn = document.getElementById("score-btn");

let scorePoint = 0;

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

document.addEventListener("keydown");
