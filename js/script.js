"use strict";
/*
 * TODO
 * Do the animation of card flipping when clicked.
 * Make the reset button.
 */
const startBtn = document.querySelector(".start-btn");
const images = document.querySelectorAll(".img");
const resetBtn = document.querySelector(".reset-arrow");
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
function handleResetOnClick() {
    isClicked = true;
    startBtn.style.animationName = "btn-fade-in";
    let i = 1;
    images.forEach((image) => {
        image.style.animationDelay = "";
        image.style.animationName = "";
        image.style.cursor = "default";
        image.setAttribute("src", "./img/tlo.png");
        image.removeEventListener("click", () => handleCardOnClick(image)); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        i++;
    });
}
startBtn.addEventListener("click", startApp);
resetBtn.addEventListener("click", handleResetOnClick);
