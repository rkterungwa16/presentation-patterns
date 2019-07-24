
define(function(require, exports, module) {
    const Slide = require("./slides");
    const slide = new Slide();
    slide.renderedSlides();
    slide.dots();
    slide.showSlides(1);
    slide.next();
    slide.prev();
});