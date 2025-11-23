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
function upgradeAnimation(variable) {
  // variable tuh nama variable elemen yang mau di animasikan
  variable.classList.add("active");
  setTimeout(() => {
    variable.classList.remove("active");
  }, 500);
}

function doWarpAnimation() {
  element.warp.container.classList.add("active");

  setTimeout(() => {
    element.warp.wrapper.classList.add("active");
    element.warp.star.forEach((star) => {
      star.classList.add("active");
    });
  }, 500);

  setTimeout(() => {
    element.warp.container.classList.remove("active");
    element.warp.wrapper.classList.remove("active");
    element.warp.star.forEach((star) => {
      star.classList.remove("active");
    });
  }, 2500);
}

export {
  scorePopup,
  multiPopup,
  btnAnimation,
  upgradeAnimation,
  doWarpAnimation,
};
