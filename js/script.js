"use strict";
/*
 * TODO
 * Do the animation of card flipping when clicked.
 * Make the reset button.
 */
const startBtn = document.querySelector(".start-btn");
const images = document.querySelectorAll(".img");
let isClicked = true;
function startApp() {
    let i = 1;
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
function handleCardOnClick(image) {
    if (isClicked) {
        isClicked = false;
        images.forEach((image) => {
            image.style.cursor = "default";
        });
        image.style.animationDelay = "0s";
        image.style.animationName = "slide-out";
        setTimeout(() => {
            image.setAttribute("src", `./img/${Math.floor(Math.random() * 13 + 1)}.png`);
            image.style.animationName = "slide-in";
        }, 500);
    }
}
function addOnClick() {
    images.forEach((image) => {
        image.addEventListener("click", () => handleCardOnClick(image));
    });
}
startBtn.addEventListener("click", startApp);
