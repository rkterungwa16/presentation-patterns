
define(function(require, exports, module) {
    const Slide = require("./slides");
    const slide = new Slide();
    slide.slideImages();
    slide.dots();
    slide.slides(1);
    slide.next();
    slide.prev();
});