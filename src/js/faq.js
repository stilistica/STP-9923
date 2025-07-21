import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import spriteUrl from '/img/sprite.svg';

const iconPlus = `${spriteUrl}#icon-plus`;
const iconClose = `${spriteUrl}#icon-close`;

document.addEventListener("DOMContentLoaded", () => {
    new Accordion(".list-qestions", {
        duration: 500,
        showMultiple: true,
    });

    const accordionButtons = document.querySelectorAll(".button-accordion");

    accordionButtons.forEach((button) => {
        const topicButton = button.closest(".topic-button");
        const topicTitle = topicButton?.querySelector('.topik-qestion');
        const listQuestionItem = topicButton?.closest('.list-qestion-item');
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
