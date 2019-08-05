
define(function (require, exports, module) {
    class Controllers {
        constructor(model, binder) {
            this.model = model;
            this.binder = binder;
        }
    }

    module.exports = Controllers;
});