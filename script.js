const massage = document.getElementById("massage");
const next = document.getElementById("next");

const messages = ["こんにちは", "こんばんは"];

let index = 0;

next.addEventListener("click", () => {
  index++;

  if (index >= messages.length) {
    index = 0;
  }

  massage.textContent = messages[index];
});
