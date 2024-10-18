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
