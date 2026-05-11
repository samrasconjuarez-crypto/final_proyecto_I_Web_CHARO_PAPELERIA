document.addEventListener("DOMContentLoaded", () => {

    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {

        button.addEventListener("click", () => {

            const item = button.closest(".cart-item");

            item.remove();

        });

    });

});