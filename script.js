function openResume(url) {
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".cards-container");

    if (container) {
        container.addEventListener("wheel", function (event) {
            event.preventDefault();
            const scrollSpeed = 50;
            container.scrollLeft += event.deltaY * 0.5 * scrollSpeed; // Горизонтальный скролл вместо вертикального
        }, { passive: false });
    }
});

document.getElementById("scrollLeft").addEventListener("click", function () {
    document.querySelector(".cards-container").scrollLeft -= 300;
});

document.getElementById("scrollRight").addEventListener("click", function () {
    document.querySelector(".cards-container").scrollLeft += 300;
});
