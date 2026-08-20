import "../source/scrollShow.comp.js"

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
document.addEventListener("DOMContentLoaded", () => {


    //*Disable drag and contextmenu
    const pageData = document.body.dataset.page;
    if (
        pageData == 'inner gallery' ||
        pageData == 'inner upstair' ||
        pageData == 'inner ground' ||
        pageData == 'inner garden'
    ) {
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
        document.addEventListener('dragstart', (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
            }
        });
        //         document.addEventListener('keydown', (e) => {
        //     if (e.key === 'F12') {
        //         e.preventDefault();
        //     }
        // });
    }

    const images = document.querySelectorAll(".gallery-image");
    const modalImage = document.getElementById("galleryModalImage");
    const modalElement = document.getElementById("galleryModal");
    const prev = document.querySelector(".gallery-prev");
    const next = document.querySelector(".gallery-next");

    let current = 0;

    function showImage(index) {
        current = (index + images.length) % images.length;
        modalImage.src = images[current].src;
        modalImage.alt = images[current].alt;
    }

    const galleryModal = bootstrap.Modal.getOrCreateInstance(modalElement);

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            showImage(index);
            galleryModal.show();
        });
    });

    prev.addEventListener("click", () => {
        showImage(current - 1)
    });

    next.addEventListener("click", () => {
        showImage(current + 1)
    });

    document.addEventListener("keydown", event => {
        if (!modalElement.classList.contains("show")) return;

        if (event.key === "ArrowLeft") showImage(current - 1);
        if (event.key === "ArrowRight") showImage(current + 1);
        if (event.key === "ArrowUp") showImage(current - 4);
        if (event.key === "ArrowDown") showImage(current + 4);
    });
});