let container = document.querySelector("#container");
containerHeight = "500px";
container.style.height = containerHeight;
container.style.width = containerHeight;

for (let i = 1; i <= 16; i++) {
  let square = document.createElement("div");
  square.setAttribute("id", `square-${i}`);
  square.setAttribute("class", "square");
  squareHeight = 500 / 16  + "px";
  console.log(squareHeight);
  square.style.height = squareHeight;
  console.log();
  square.style.width = squareHeight;
  container.appendChild(square);
}
