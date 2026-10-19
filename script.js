document.addEventListener("DOMContentLoaded", function () {
    // Gestion de l'affichage / masquage de la FAQ
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.style.display === "block";

            // Ferme toutes les réponses
            document.querySelectorAll(".faq-answer").forEach((ans) => {
                ans.style.display = "none";
            });

            // Bascule la réponse sélectionnée
            if (!isOpen) {
                answer.style.display = "block";
            }
        });
    });
});