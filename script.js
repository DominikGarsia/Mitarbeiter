function openResume(url) {
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".cards-container");

    if (container) {
        container.addEventListener("wheel", function (event) {
            event.preventDefault(); // Отменяем стандартную вертикальную прокрутку
            container.scrollLeft += event.deltaY; // Двигаем карточки влево/вправо
        });
    }
});
