const startBtn: HTMLButtonElement = document.querySelector(".start-btn")!;
const images: NodeListOf<HTMLImageElement> =
  document.querySelectorAll(".board__img");
let listen: boolean = true;
function startApp() {
  let i: number = 1;
  startBtn.style.animationName = "fade-out";
  images.forEach((item) => {
    item.style.animationDelay = `${i}s`;
    item.style.animationName = "fade-in";
    item.style.cursor = "pointer";
    i++;
  });
}

function handleCard(item: HTMLImageElement) {
  if (listen) {
    item.style.animationDelay = "0s";
    item.style.animationName = "slide";
  }
}

startBtn.addEventListener("click", startApp);
images.forEach((item) => {
  item.addEventListener("click", () => handleCard(item));
});
