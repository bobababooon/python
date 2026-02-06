const massage = document.getElementById("massage")
const next = document.getElementById("next")

const massage = ["こんにちは","こんばんは"]

let index = 0;

next.addEventListener("click",() => {
  index = index+1;

                      if(index >= message.length) {
                        index=0;
                      }
   message.textContent = messages[index];
})
