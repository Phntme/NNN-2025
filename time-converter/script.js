const btn = document.getElementById("btn"),
  input = document.getElementById("time"),
  output = document.getElementById("output");

function convert(value) {
  const [hour, minute, second] = value.split(":").map(Number);
  return hour * 3600 + minute * 60 + second;
}

btn.addEventListener("click", () => {
  output.value = convert(input.value);
});
