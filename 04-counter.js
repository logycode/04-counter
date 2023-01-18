const counter = document.querySelector(".counter");
let num = 0;

function count() {
  num++;
  counter.textContent = num;
  document.querySelector(".counter-display").style.width = num + "vw";
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
});
