
let buttonBackground = document.querySelector(".buttonBackground");
let bodyBackground = document.querySelector(".bodyBackground");

let body = document.querySelector(".body");

buttonBackground.addEventListener("click", () => {
    body.classList.toggle("body--changeBackground");
    bodyBackground.innerText = body.classList.contains("body--changeBackground") ? "kosmiczny" : "czarny";
});


