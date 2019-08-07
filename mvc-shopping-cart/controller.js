
define(function (require, exports, module) {
    class Controllers {
        constructor(model) {
            this.model = model;
        }

        setCurrentImage (currentImageId, view) {
            view.productImage(currentImageId)
        }

        setNextBrand(n, view) {
            view.nextBrand(this.model.currentBrandId += n);
        }
    }

    module.exports = Controllers;
});