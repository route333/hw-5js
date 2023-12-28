const gameStatusEl = document.getElementById("game__status");
let keyEl = document.getElementById("game__key");
const gameBtn = document.getElementById("game__btn");

const keys = ["A", "T", "W", "F", "Y", "N", "J", "K", "L", "P"];

let currentKeyIndex = 0;

document.addEventListener("keydown", (e) => {
  const presskey = e.key.toUpperCase();

  if (presskey === keys[currentKeyIndex]) {
      PNotify.success({
          title: "красень",
          text: `Молодець, хоч раз в житті все правильно зробив, зараз ти нажав ${keys[currentKeyIndex]}`,
        });
        currentKeyIndex++;
  }else{
      PNotify.error({
        title: "от халепа",
        text: "Переробляй міша, все фігня",
      });
    }
});

document.addEventListener("keypress", (e) => {
  e.preventDefault();
});

gameBtn.addEventListener("click", () => {
  currentKeyIndex = 0;
});
