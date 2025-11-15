import { gameData } from "../data/gameData.mjs";
import { element } from "../data/domData.mjs";

// pop up score
function scorePopup(number, operasi) {
  if (number === 0) return;
  const scorePop = document.createElement("div");
  scorePop.classList.add("score-popup");
  if (operasi === "-") {
    scorePop.classList.add("minus");
  }
  scorePop.textContent = `${operasi} ${number}`;

  const direction = Math.random() < 0.5 ? "scorePopRight" : "scorePopLeft";

  scorePop.style.animationName = direction;

  element.gameImg.appendChild(scorePop);

  setTimeout(() => {
    scorePop.remove();
  }, 750);
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
  }, 950);
}

// fungsi animasi button kalo dipencet
function btnAnimation() {
  element.scoreBtn.classList.add("btn-active");
  setInterval(() => {
    element.scoreBtn.classList.remove("btn-active");
  }, 100);
}

//function animasi status tiap kali dilakukan upgrade
// variable tuh nama variable elemen yang mau di animasikan
function upgradeAnimation(variable) {
  variable.classList.add("active");
  setTimeout(() => {
    variable.classList.remove("active");
  }, 500);
}

export { scorePopup, multiPopup, btnAnimation, upgradeAnimation };
