
define(function (require, exports, module) {
    class slide {
        constructor() {
            this.slideIndex = 1;
            this.images = [
                {
                    url: "./assets/images/img_nature_wide.jpg",
                    caption: "Caption One"
                },
                {
                    url: "./assets/images/img_snow_wide.jpg",
                    caption: "Caption Two"
                },
                {
                    url: "./assets/images/img_mountains_wide.jpg",
                    caption: "Caption Three"
                }
            ];
            this.plusSlides = this.plusSlides.bind(this);
            this.prev = this.prev.bind(this);
            this.slides = this.slides.bind(this);
            this.next = this.next.bind(this);
            this.currentSlide = this.currentSlide.bind(this);
            this.dots = this.dots.bind(this);
            this.slideImages = this.slideImages.bind(this);
        }

        slides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");

            if (n > slides.length) { this.slideIndex = 1 }
            if (n < 1) { this.slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex - 1].style.display = "block";
            dots[this.slideIndex - 1].className += " active";
        }

        slideImages() {

            this.images.forEach((image, index) => {
                let slideImageContainer = document.getElementById("slide-image-container");
                let slide = document.createElement("div");
                slide.className = "mySlides fade";
                let slideNumber = document.createElement("div");
                slideNumber.className = "numbertext";
                // TODO: explore writing bind to model
                slideNumber.innerText = `${index + 1} / ${this.images.length}`;
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
                    this.slideIndex = currentSlideValue;
                    this.currentSlide(currentSlideValue);
                }
            }
        }

        next() {
            let slideDirection = document.getElementById("slide-direction");
            const nextAnchorElement = document.createElement('a');
            nextAnchorElement.innerHTML = "&#10095;"
            nextAnchorElement.className = "next";
            nextAnchorElement.onclick = () => {
                this.plusSlides(1);
            }
            slideDirection.appendChild(nextAnchorElement);
        }


        prev() {
            let slideDirection = document.getElementById("slide-direction");
            const nextAnchorElement = document.createElement('a');
            nextAnchorElement.innerHTML = "&#10094;"
            nextAnchorElement.className = "prev";
            nextAnchorElement.onclick = () => {
                this.plusSlides(-1);
            }
            slideDirection.appendChild(nextAnchorElement);
        }

        plusSlides(n) {
            this.slides(this.slideIndex += n);
        }

        currentSlide(n) {
            this.slideIndex = n;
            this.slides(this.slideIndex = n);
        }
    }

    module.exports = slide;
});