const imgContainer = document.getElementById("img-container");
const qrInput = document.getElementById("qr-input");
const qrImg = document.getElementById("qr-img");
const generateBtn = document.getElementById("btn");
const inputInfo = document.getElementById("input-info");

function generateQR(value) {
  if (!qrInput.value) {
    inputInfo.classList.add("error");
    setTimeout(() => {
      inputInfo.classList.remove("error");
    }, 1000);
  } else {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;

    imgContainer.classList.add("visible");
  }
}

function getUserInput() {
  const value = qrInput.value;
  return value;
}

generateBtn.addEventListener("click", () => {
  const value = getUserInput();
  generateQR(value);
});
