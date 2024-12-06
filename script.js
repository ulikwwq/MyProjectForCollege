// Обработка отзывов
document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedback-form");
    const commentsSection = document.getElementById("comments");

    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Получение данных из формы
        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

        // Создание нового элемента для комментария
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;

        // Добавление комментария в раздел
        commentsSection.appendChild(commentDiv);

        // Очистка формы
        feedbackForm.reset();
    });
});
