/*
 * TODO
 * Do the animation of card flipping when clicked.
 */

const startBtn: HTMLButtonElement = document.querySelector(".start-btn")!;
const images: NodeListOf<HTMLImageElement> = document.querySelectorAll(".img");
const resetBtn: HTMLElement = document.querySelector(".reset-arrow")!;

let isClicked: boolean = true;

function startApp(): void {
  let i: number = 1;
  startBtn.style.animationName = "fade-out";

  images.forEach((image) => {
    image.style.animationDelay = `${i}s`;
    image.style.animationName = `fade-in${i}`;
    i++;
  });

  setTimeout(() => {
    images.forEach((image) => {
      image.style.cursor = "pointer";
    });
  }, 6000);

  setTimeout(addOnClick, 6100);
}

function handleCardOnClick(e: Event): void {
  if (isClicked) {
    isClicked = false;

    images.forEach((image) => {
      image.style.cursor = "default";
    });

    const target = e.target as HTMLImageElement;

    target.style.animationDelay = "0s";
    target.style.animationName = "slide-out";

    setTimeout(() => {
      target.setAttribute(
        "src",
        `./img/${Math.floor(Math.random() * 13 + 1)}.png`
      );
      target.style.animationName = "slide-in";
    }, 500);
  }
}

function addOnClick(): void {
  images.forEach((image) => {
    image.addEventListener("click", handleCardOnClick);
  });
}

function handleResetOnClick(): void {
  isClicked = true;
  startBtn.style.animationName = "";
  let i: number = 1;
  images.forEach((image) => {
    image.style.animationDelay = "";
    image.style.animationName = "";
    image.style.cursor = "default";
    image.setAttribute("src", "./img/tlo.png");
    image.removeEventListener("click", handleCardOnClick);
    i++;
  });
}

startBtn.addEventListener("click", startApp);
resetBtn.addEventListener("click", handleResetOnClick);
