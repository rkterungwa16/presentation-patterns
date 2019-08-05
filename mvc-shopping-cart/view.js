
define(function (require, exports, module) {
    class Views {
        constructor (Model, Controller, Binder) {
            this.model = new Model();
            this.binder = new Binder();
            this.controller = new Controller(this.model, this.binder);
        }

    }

    module.exports = Views;
});