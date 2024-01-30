let activeFaqItem = null;

document.addEventListener("click", (e) => {
    const faqItem = e.target.closest(".faq-item");

    if (faqItem) {
        // Toggle the active class for the clicked item
        faqItem.classList.toggle("active");
        faqItem.classList.toggle("change-bg");

        // Close the previously active FAQ item
        if (activeFaqItem && activeFaqItem !== faqItem) {
            activeFaqItem.classList.remove("active");
            activeFaqItem.classList.remove("change-bg");
        }

        // Update the reference to the currently active FAQ item
        activeFaqItem = faqItem;
    }
});
