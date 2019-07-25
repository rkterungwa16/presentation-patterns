
define(function(require, exports, module) {
    const View = require("./view");
    const Controller = require("./controller");
    const Model = require("./model");
    const Binder = require("./binder");
    const view = new View(Model, Controller, Binder);
    view.slideImages();
    view.dots();
    view.slides(1);
    view.next();
    view.prev();
});