/*
 * TODO
 * Do the animation of card flipping when clicked.
 * Make the reset button.
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

function handleCardOnClick(image: HTMLImageElement): void {
  if (isClicked) {
    isClicked = false;

    images.forEach((image) => {
      image.style.cursor = "default";
    });

    image.style.animationDelay = "0s";
    image.style.animationName = "slide-out";

    setTimeout(() => {
      image.setAttribute(
        "src",
        `./img/${Math.floor(Math.random() * 13 + 1)}.png`
      );
      image.style.animationName = "slide-in";
    }, 500);
  }
}

function addOnClick(): void {
  images.forEach((image) => {
    image.addEventListener("click", (): void => handleCardOnClick(image));
  });
}

function handleResetOnClick(): void {
  isClicked = true;
  startBtn.style.animationName = "btn-fade-in";
  let i: number = 1;
  images.forEach((image) => {
    image.style.animationDelay = "";
    image.style.animationName = "";
    image.style.cursor = "default";
    image.setAttribute("src", "./img/tlo.png");
    image.removeEventListener("click", (): void => handleCardOnClick(image)); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    i++;
  });
}

startBtn.addEventListener("click", startApp);
resetBtn.addEventListener("click", handleResetOnClick);
