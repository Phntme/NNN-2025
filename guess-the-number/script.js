let computer = Math.floor(Math.random() * 100) + 1;
console.log("Computer's number (for testing purposes): " + computer);
let chance = 7;
const guessBtn = document.getElementById("guess-button");
let chanceInfo = document.getElementById("chance-info");
const wrongInfo = document.getElementById("wrong-container");
const wrongMsg = document.getElementById("wrong-message");
chanceInfo.innerHTML = chance;

function checkGuess() {
  let userGuess = document.getElementById("user-guess").value;

  if (!userGuess) {
    alert("masukkan angka yang valid");
  } else if (userGuess < computer) {
    chance -= 1;
    tell("Terlalu Rendah!");
    msgActive();
  } else if (userGuess > computer) {
    chance -= 1;
    tell("Terlalu Tinggi!");
    msgActive();
  } else {
    tell("Benar!");
    msgActive();
    chance = 7;
  }
}

function tell(message) {
  wrongMsg.innerHTML = message;
}

function msgActive() {
  wrongInfo.classList.add("active");
  setTimeout(() => {
    wrongInfo.classList.remove("active");
  }, 1000);
}

guessBtn.addEventListener("click", () => {
  if (chance === 0) {
    alert("kesempatan habis, kamu kalah");
    return;
  }
  checkGuess();
  chanceInfo.innerHTML = chance;
});
