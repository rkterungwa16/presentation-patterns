
define(function (require, exports, module) {
    class Controllers {
        constructor(model) {
            this.model = model;
        }

        setCurrentImage (currentImageId, view) {
            view.productImage(currentImageId)
        }
    }

    module.exports = Controllers;
});