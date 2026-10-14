const containerDiv = document.querySelector(".container");
const resetBtn = document.querySelector("#reset-button");

function resetSketch() {
  const highlighted = document.querySelectorAll(".box-hover");

  highlighted.forEach((div) => {
    div.classList.remove("box-hover");
  })
}

for (let i=0; i<=255; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");

  newDiv.addEventListener('mouseenter', () => {
    newDiv.classList.add("box-hover");
  })

  containerDiv.appendChild(newDiv);
}

resetBtn.addEventListener("click", resetSketch);