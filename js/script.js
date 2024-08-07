"use strict";
const startBtn = document.querySelector(".start-btn");
const images = document.querySelectorAll(".img");
let listen = true;
function startApp() {
    let i = 1;
    startBtn.style.animationName = "fade-out";
    images.forEach((item) => {
        item.style.animationDelay = `${i}s`;
        item.style.animationName = `fade-in${i}`;
        item.style.cursor = "pointer";
        i++;
    });
}
function handleCard(item) {
    if (listen) {
        item.style.animationDelay = "0s";
        item.style.animationName = "slide";
    }
}
startBtn.addEventListener("click", startApp);
images.forEach((item) => {
    item.addEventListener("click", () => handleCard(item));
});
