console.log("FAQ script loaded!");

import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function () {
    new Accordion(".faq-list", {
        duration: 400,
    });

    function toggleIcon(button, isOpen) {
        const iconUse = button.querySelector("use");
        if (iconUse) {
            const newIcon = isOpen ? "icon-IconUp" : "icon-IconDown";
            iconUse.outerHTML = `<use href="./img/icons/icon-sprite.svg#${newIcon}"></use>`;
        }
    }

    const items = document.querySelectorAll(".faq-link");
    items.forEach((item) => {
        const button = item.querySelector(".faq-btn");

        button.addEventListener("click", function () {
            const isActive = item.classList.toggle("active");
            toggleIcon(button, isActive);
        });
    });
});
