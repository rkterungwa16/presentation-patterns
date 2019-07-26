
define(function (require, exports, module) {
    const Model = require("./model");
    const View = require("./view");
    const Binder = require("./binder");

    const view = new View(Model, Binder);
    view.login();
});