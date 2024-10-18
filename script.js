let display = document.querySelector("#display");
displayHeight = "500px";
display.style.height = displayHeight;
display.style.width = displayHeight;
displaySize = parseInt(displayHeight);
console.log(displaySize);

function changeColor(element) {
  element.style.backgroundColor = "#000";
}

function createGrid(size = 16) {
  display.innerText = "";
  for (let j = 1; j <= size; j++) {
    for (let i = 1; i <= size; i++) {
      let square = document.createElement("div");
      square.setAttribute("id", `square-${i}${j}`);
      square.setAttribute("class", "square");
      squareHeight = displaySize / size + "px";
      console.log(squareHeight);
      square.style.height = squareHeight;
      square.style.width = squareHeight;
      square.addEventListener("mouseenter", function () {
        changeColor(square);
      });
      display.appendChild(square);
    }
  }
}

createGrid();

// let gridSizeBtn = document.querySelector("#grid-size");
// gridSizeBtn.addEventListener("click", function () {
//   createGrid(
//     prompt("Enter new grid size (i.e. for 10 x 10 grid, enter 10)", 16),
//   );
// });

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
