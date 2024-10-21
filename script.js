document.addEventListener("DOMContentLoaded", () => {
  createGrid();
});

let display = document.querySelector("#display");
displayHeight = "500px";
display.style.height = displayHeight;
display.style.width = displayHeight;
displaySize = parseInt(displayHeight);

let paintMode = "standard";

let discoBtn = document.querySelector("#randomize");
discoBtn.addEventListener("click", function () {
  clearGrid();
  paintMode = "disco";
});

let standardBtn = document.querySelector("#standard");
standardBtn.addEventListener("click", function () {
  clearGrid();
  paintMode = "standard";
});

let darkenBtn = document.querySelector("#darken");
darkenBtn.addEventListener("click", function () {
  clearGrid();
  paintMode = "darken";
});

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearGrid);

function clearGrid() {
  let alpha = 1.0;
  let squares = document.querySelectorAll(".square");
  for (square of squares) {
    square.style.backgroundColor = `rgba(255,255,255, ${alpha})`;
  }
}

function changeColor(element) {
  if (paintMode == "standard") {
    let colorValue = document.querySelector("#favcolor").value;
    element.style.backgroundColor = colorValue;
  } else if (paintMode == "disco") {
    let colorValue = "#" + Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = colorValue;
  } else if (paintMode == "darken") {
    const value =
      getComputedStyle(element).getPropertyValue("background-color");
    const parts = value.match(/[\d.]+/g);
    if (parts.length === 3) {
      parts.push(1.0);
    }
    parts[3] = Math.min(1, Math.max(0, parseFloat(parts[3]) - 0.1));
    element.style.backgroundColor = `rgba(${parts.join(",")})`;
  }
}

function createGrid(size = 16) {
  display.innerText = "";
  for (let j = 1; j <= size; j++) {
    for (let i = 1; i <= size; i++) {
      let square = document.createElement("div");
      square.setAttribute("id", `square-${i}${j}`);
      square.setAttribute("class", "square");
      squareHeight = displaySize / size + "px";
      square.style.height = squareHeight;
      square.style.width = squareHeight;
      square.classList.add("standard");
      square.style.backgroundColor = "#ffffff";
      square.style.opacity = "1.0";
      square.addEventListener("mouseenter", function () {
        changeColor(square);
      });
      display.appendChild(square);
    }
  }
}

function promptUser() {
  let gridPrompt = prompt(
    "Enter new grid size between 1 and 100 (i.e. for a 10 x 10 grid, enter 10)",
    16,
  );
  if (gridPrompt > 0 && gridPrompt <= 100 && gridPrompt.match(/\d/gim)) {
    createGrid(gridPrompt);
  } else {
    promptUser();
  }
}

let gridSizeBtn = document.querySelector("#grid-size");
gridSizeBtn.addEventListener("click", promptUser);
