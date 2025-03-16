document.addEventListener("DOMContentLoaded", function () {
  const cells = document.queryselectorall(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", function () {
      document.querySelector(".cell").textContent = "X";
    });
  });
});
document.querySelector(".first second cell").textContent = "X";
