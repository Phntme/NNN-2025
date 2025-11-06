const btn = document.getElementById("btn"),
  input = document.getElementById("time"),
  output = document.getElementById("output"),
  errorMsg = document.getElementById("error");

function convert(value) {
  waktu = value.split(":").map(Number);
  if (waktu.length === 1) {
    return waktu;
  } else if (waktu.length === 2) {
    const [menit, detik] = waktu;
    return menit * 60 + detik;
  } else {
    const [jam, menit, detik] = waktu;
    return jam * 3600 + menit * 60 + detik;
  }
}

function validasi(value) {
  waktu = value.split(":").map(Number);
  if (!value.trim() || waktu.some(isNaN)) {
    errorMsg.classList.add("active");
    setTimeout(() => {
      errorMsg.classList.remove("active");
    }, 1500);
    return false;
  }
  return true;
}

btn.addEventListener("click", () => {
  if (!validasi(input.value)) return;
  output.value = convert(input.value) + " Detik";
});
