import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import sprite from "../img/icons/icon-sprite.svg";

document.addEventListener("DOMContentLoaded", function () {
    new Accordion(".faq-list", {
        duration: 400,
    });

    function toggleIcon(button, isOpen) {
        const newIcon = isOpen ? "icon-IconUp" : "icon-IconDown";
        button.innerHTML = `
            <svg width="24" height="24" class="faq-icon">
                <use href="${sprite}#${newIcon}"></use>
            </svg>
        `;
    }

    const items = document.querySelectorAll(".faq-link");

    items.forEach((item) => {
        const button = item.querySelector(".faq-btn");
        const content = item.querySelector(".faq-panel");

        button.addEventListener("click", function () {
            const isActive = item.classList.toggle("is-active");
            toggleIcon(button, isActive);

            if (isActive) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }
        });
    });
});
