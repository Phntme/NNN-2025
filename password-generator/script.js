const copy = document.getElementById("copy");
const generateBtn = document.getElementById("btn");
const input = document.getElementById("input");

// nge-generate password
function generate() {
  const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
  const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const number = "1234567890";
  const symbols = "!@#$%^&*()-_=+[]{}:;|?/";

  const all = lowerCase + upperCase + number + symbols;

  let password = "";
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

  console.log(`ini lowercase ${password}`);

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  console.log(password);

  while (password.length < 12) {
    password += all[Math.floor(Math.random() * all.length)];
  }

  console.log(password);

  return password;
}

// nampilin password
function display() {
  const randomPassword = generate();
  input.value = randomPassword;
}

// nge-copy password
async function copyPassword() {
  if (!input.value) {
    alert("Lu mau pw kosong?");
    return;
  }

  try {
    await navigator.clipboard.writeText(input.value);
    alert("Copy Berhasil");
  } catch (err) {
    alert("Gabisa Copy JIRRR");
  }
}

generateBtn.addEventListener("click", () => {
  display();
});

copy.addEventListener("click", () => {
  copyPassword();
});
