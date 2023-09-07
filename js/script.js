
const buttonBackgroundElement = document.querySelector(".js-buttonBackground");
const bodyBackgroundElement = document.querySelector(".js-bodyBackground");
const bodyElement = document.querySelector(".js-body");

buttonBackgroundElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--changeBackground");
    bodyBackgroundElement.innerText = bodyElement.classList.contains("body--changeBackground") ? "kosmiczny" : "czarny";
});


