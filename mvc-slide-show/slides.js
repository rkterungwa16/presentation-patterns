
define(function (require, exports, module) {
    let slideIndex = 1;
    const showSlides = function (n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    const next = function () {
        let slideDirection = document.getElementById("slide-direction");
        const nextAnchorElement = document.createElement('a');
        nextAnchorElement.innerHTML = "&#10095;"
        nextAnchorElement.className = "next";
        nextAnchorElement.addEventListener('click', (event) => {
            plusSlides(1);
        });
        slideDirection.appendChild(nextAnchorElement);
    }

    const prev = function () {
        let slideDirection = document.getElementById("slide-direction");
        const nextAnchorElement = document.createElement('a');
        nextAnchorElement.innerHTML = "&#10094;"
        nextAnchorElement.className = "prev";
        nextAnchorElement.addEventListener('click', (event) => {
            plusSlides(-1);
        });
        slideDirection.appendChild(nextAnchorElement);
    }

    const plusSlides = function (n) {
        console.log('plus slide', n);
        showSlides(slideIndex += n);
    }

    const currentSlide = function (n) {
        showSlides(slideIndex = n);
    }

    exports.showSlides = showSlides;
    exports.plusSlides = plusSlides;
    exports.currentSlide = currentSlide;
    exports.next = next;
    exports.prev = prev;
});