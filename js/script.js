{
    const onChangeBackgroundClick = () => {
        const bodyElement = document.querySelector(".js-body");
        const bodyBackgroundElement = document.querySelector(".js-bodyBackground")

        bodyElement.classList.toggle("body--changeBackground");
        bodyBackgroundElement.innerText = bodyElement.classList.contains("body--changeBackground") ? "kosmiczny" : "czarny";

    };

    const init = () => {
        const buttonBackgroundElement = document.querySelector(".js-buttonBackground");
        buttonBackgroundElement.addEventListener("click", onChangeBackgroundClick);
    };

    init();
}