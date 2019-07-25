
define(function (require, exports, module) {
    class Controllers {
        constructor(model, binder) {
            this.model = model;
            this.binder = binder;
        }

        plusSlides(n, view) {
            view.slides(this.model.slideIndex += n);
        }

        currentSlide(n, view) {
            this.model.slideIndex = n;
            view.slides(n);
        }
    }

    module.exports = Controllers;
});