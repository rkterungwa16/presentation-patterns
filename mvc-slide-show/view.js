
define(function (require, exports, module) {
    class Views {
        constructor (Model, Controller, Binder) {
            this.model = new Model();
            this.binder = new Binder();
            this.controller = new Controller(this.model, this.binder);
        }
        slides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");

            if (n > slides.length) { this.model.slideIndex = 1 }
            if (n < 1) { this.model.slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.model.slideIndex - 1].style.display = "block";
            dots[this.model.slideIndex - 1].className += " active";
        }

        slideImages() {
            this.model.images.forEach((image, index) => {
                let slideImageContainer = document.getElementById("slide-image-container");
                let slide = document.createElement("div");
                slide.className = "mySlides fade";
                let slideNumber = document.createElement("div");
                slideNumber.className = "numbertext";
                slideNumber.innerText = `${index + 1} / ${this.model.images.length}`;
                let slideImage = document.createElement("img");
                slideImage.src = `${image.url}`;
                slideImage.style.width = "100%";
                let slideText = document.createElement("div");
                slideText.className = "text";
                slideText.innerText = image.caption;
                slide.appendChild(slideNumber);
                slide.appendChild(slideImage);
                slide.appendChild(slideText);
                slideImageContainer.appendChild(slide);
            })

        }

        dots() {
            const parentDot = document.getElementById('dot');
            for (let dot = 0; dot < 3; ++dot) {
                const childDot = document.createElement('span');
                const appendChildDot = parentDot.appendChild(childDot);
                appendChildDot.className = "dot";
                appendChildDot.id = `dot-${dot}`;
                appendChildDot.onclick = () => {
                    const currentSlideValue = dot + 1;
                    this.controller.currentSlide(currentSlideValue, this);
                }
            }
        }

        next() {
            let slideDirection = document.getElementById("slide-direction");
            const nextAnchorElement = document.createElement('a');
            nextAnchorElement.innerHTML = "&#10095;"
            nextAnchorElement.className = "next";
            nextAnchorElement.onclick = () => {
                this.controller.plusSlides(1, this);
            }
            slideDirection.appendChild(nextAnchorElement);
        }


        prev() {
            let slideDirection = document.getElementById("slide-direction");
            const nextAnchorElement = document.createElement('a');
            nextAnchorElement.innerHTML = "&#10094;"
            nextAnchorElement.className = "prev";
            nextAnchorElement.onclick = () => {
                this.controller.plusSlides(-1, this);
            }
            slideDirection.appendChild(nextAnchorElement);
        }
    }

    module.exports = Views;
});