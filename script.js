const containerDiv = document.querySelector(".container");
const resetBtn = document.querySelector("#reset-button");
const resizeBtn = document.querySelector("#resize-button");
const gridSizeInput = document.querySelector("#grid-size");

function resetSketch() {
  const highlighted = document.querySelectorAll(".box-hover");

  highlighted.forEach((div) => {
    div.classList.remove("box-hover");
  });
}

function createGrid(sideNum) {
  // Clear any existing grid boxes
  containerDiv.innerHTML = "";

  // Adjust gap dynamically so grid boxes fit nicely within the container
  let gap = 4;
  if (sideNum > 64) {
    gap = 0;
  } else if (sideNum > 32) {
    gap = 1;
  } else if (sideNum > 16) {
    gap = 2;
  }
  containerDiv.style.gap = `${gap}px`;

  const totalBoxes = sideNum * sideNum;
  const boxBasis = gap > 0
    ? `calc((100% - ${(sideNum - 1) * gap}px) / ${sideNum})`
    : `calc(100% / ${sideNum})`;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < totalBoxes; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.style.flexBasis = boxBasis;

    newDiv.addEventListener("mouseenter", () => {
      newDiv.classList.add("box-hover");
    });

    fragment.appendChild(newDiv);
  }

  containerDiv.appendChild(fragment);
}

function handleResize() {
  const inputVal = parseInt(gridSizeInput.value, 10);

  if (isNaN(inputVal) || inputVal < 1 || inputVal > 100) {
    alert("Please enter a valid number of sides between 1 and 100.");
    return;
  }

  createGrid(inputVal);
}

resizeBtn.addEventListener("click", handleResize);

gridSizeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleResize();
  }
});

resetBtn.addEventListener("click", resetSketch);

// Initialize default 16x16 grid
createGrid(16);