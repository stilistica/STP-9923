import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import spriteUrl from '/img/sprite.svg';

const iconPlus = `${spriteUrl}#icon-plus`;
const iconClose = `${spriteUrl}#icon-close`;

document.addEventListener("DOMContentLoaded", () => {
    new Accordion("[data-accordion-list]", {
        duration: 500,
        showMultiple: true,
    });
    const accordionButtons = document.querySelectorAll("[data-accordion-btn]");

    accordionButtons.forEach((button) => {
        const topicButton = button.closest("[data-topic-button]");
        const topicTitle = topicButton?.querySelector('[data-topic-title]');
        const listQuestionItem = topicButton?.closest('[data-accordion-item]');
        const question = topicButton?.nextElementSibling;
        const icon = button.querySelector("use");

        if (!question) return;

        button.addEventListener("click", () => {
            question.classList.toggle("open");

            if (topicTitle) {
                topicTitle.classList.toggle("open");
            }
            if (listQuestionItem) {
                listQuestionItem.classList.toggle("open");
            }

            const isOpen = question.classList.contains("open");
            icon.setAttribute("href", isOpen ? iconClose : iconPlus);
        });
    });
});
