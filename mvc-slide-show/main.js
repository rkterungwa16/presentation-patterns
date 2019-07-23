
define(function(require, exports, module) {
    let slideIndex = 1;
    const { createDots } = require("./dots");
    const { showSlides, next, prev } = require("./slides");

    createDots();
    showSlides(slideIndex);
    next();
    prev();
});