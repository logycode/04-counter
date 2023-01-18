const counter = document.querySelector(".counter");
let num = 0;

function count() {
  num++;
  counter.textContent = num;
  if (num > 100) {
    document.querySelector(".counter-display").style.width = num - 100 + "vw";
    document.querySelector(".counter-display").classList.add("bg100");
    document.querySelector("header").classList.add("bg100");
  } else {
    document.querySelector(".counter-display").style.width = num + "vw";
  }
}

document.querySelector("main").addEventListener("click", count); // warum muss ich hier auf die Klammern verzichten, um die Funktion immer wieder auszuführen?
document.addEventListener("keyup", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    count();
  }
});

document.querySelector(".reset").addEventListener("click", () => {
  num = 0;
  counter.textContent = num;
  document.querySelector(".counter-display").style.width = 0;
  document.querySelector(".counter-display").classList.remove("bg100");
  document.querySelector("header").classList.remove("bg100");
});
