let display = document.querySelector("#display");
displayHeight = "500px";
display.style.height = displayHeight;
display.style.width = displayHeight;

for (let j = 1; j <= 16; j++) {
  for (let i = 1; i <= 16; i++) {
    let square = document.createElement("div");
    square.setAttribute("id", `square-${i}${j}`);
    square.setAttribute("class", "square");
    squareHeight = 500 / 16 + "px";
    console.log(squareHeight);
    square.style.height = squareHeight;
    console.log();
    square.style.width = squareHeight;
    display.appendChild(square);
  }
}
