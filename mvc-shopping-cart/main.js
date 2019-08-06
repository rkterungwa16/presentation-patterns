
define(function(require, exports, module) {
    const Model = require("./model");
    const View = require("./view");
    const Controller = require("./controller");
    // const Binder = require("./binder");
    const view = new View(Model, Controller);
    view.productImage();
    view.arrows();
    view.rows();
});