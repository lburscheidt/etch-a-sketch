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
  console.log(paintMode);
});

let standardBtn = document.querySelector("#standard");
standardBtn.addEventListener("click", function () {
  clearGrid();
  paintMode = "standard";
  console.log(paintMode);
});

function clearGrid() {
  let squares = document.querySelectorAll(".square");
  console.log(squares);
  for (square of squares) {
    square.style.backgroundColor = "#ffffff";
  }
}

function changeColor(element) {
  if (paintMode == "standard") {
    let colorValue = document.querySelector("#favcolor").value;
    element.style.backgroundColor = colorValue;
  } else if ((paintMode = "disco")) {
    let colorValue = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = colorValue;
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
      square.addEventListener("mouseenter", function () {
        changeColor(square);
      });
      display.appendChild(square);
    }
  }
}

createGrid();

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
