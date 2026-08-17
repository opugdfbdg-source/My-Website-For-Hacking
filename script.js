document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(
        ".download-btn, .social-btn, .contact-btn"
    );

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.96)";

            setTimeout(() => {
                button.style.transform = "";
            }, 150);

        });

    });

});