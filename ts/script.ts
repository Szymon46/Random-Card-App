const startBtn: HTMLButtonElement = document.querySelector(".start-btn")!;
const images: NodeListOf<HTMLImageElement> =
  document.querySelectorAll(".board__img");

function startApp() {
  let i = 1;
  startBtn.style.animationName = "fade-out";
  images.forEach((item) => {
    item.style.animationDelay = `${i}s`;
    item.style.animationName = "fade-in";
    i++;
  });
}

startBtn.addEventListener("click", startApp);
