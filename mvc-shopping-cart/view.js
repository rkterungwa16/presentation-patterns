
define(function (require, exports, module) {
    const createLeftArrow = Symbol("createLeftArrow");
    const createLeftArrowIcon = Symbol("createLeftArrowIcon");
    const createRightArrow = Symbol("createRightArrow");
    const createRightArrowIcon = Symbol("createRightArrowIon");
    const createArrowContainer = Symbol("createArrowContainer");
    const createProductImage = Symbol("createProductImage");
    const createProductImageContainer = Symbol("createProductImageContainer");
    const createImageColumn = Symbol("createImageColumn");
    const createRowOfImages = Symbol("createRowOfImages");
    class Views {
        constructor (Model, Controller) {
            this.model = new Model();
            this.controller = new Controller(this.model);
        }

        // <div class="column">
        //         <img class="demo cursor" src="./assets/images/nike_women_sock_dart_br_nsw_black.jpg" style="width:100%" onclick="currentSlide(1)"
        //             alt="The Woods">
        //     </div>

        [createImageColumn] = (imageInfo) => {
            const imageColumn = document.createElement("div");
            imageColumn.className = "column";

            const productImage = this[createProductImage](imageInfo.url);

            imageColumn.appendChild(productImage);

            return imageColumn;
        }

        [createRowOfImages] = () => {
            const rowOfImages = document.createElement("div");
            rowOfImages.className = "row";

            this.model.images.forEach((image) => {
                const productImageColumn = this[createImageColumn](image);
                rowOfImages.appendChild(productImageColumn);
            });

            return rowOfImages;
            
        }

        rows () {
            const container = document.getElementById("root");
            const imageRows = this[createRowOfImages]();
            container.appendChild(imageRows);
        }


        [createProductImage] = (imageUrl, className = "") => {
            let productImage = document.createElement("img");
            productImage.src = `${imageUrl}`;
            productImage.style.width = "100%";
            productImage.className = className;
            return productImage;
        }

        [createProductImageContainer] = (imageInfo) => {
            const productImageContainer = document.createElement("div");
            productImageContainer.className = "product-img__container";
            productImageContainer.style.display = imageInfo.isOpen ? "block" : "none";

            const productImage = this[createProductImage](imageInfo.url, "product-img");
            productImageContainer.appendChild(productImage);

            return productImageContainer;
        }

        productImage() {
            this.model.images.forEach((image) => {
                const container = document.getElementById("root");
                
                const productImageContainer = this[createProductImageContainer](image);
                
                container.appendChild(productImageContainer);
            });

        }

        [createLeftArrow] = () => {
            const leftArrow = document.createElement("a");
            leftArrow.className = "prev";

            const leftArrowIcon = this[createLeftArrowIcon]();

            leftArrow.appendChild(leftArrowIcon);
            return leftArrow;
        }

        [createLeftArrowIcon] = () => {
            const leftArrowIcon =  document.createElement("ion-icon");
            leftArrowIcon.name = "arrow-back";
            return leftArrowIcon;
        }

        [createRightArrow] = () => {
            const rightArrow = document.createElement("a");
            rightArrow.className = "next";

            const rightArrowIcon = this[createRightArrowIcon]();

            rightArrow.appendChild(rightArrowIcon);
            return rightArrow;
        }

        [createRightArrowIcon] = () => {
            const rightArrowIcon = document.createElement("ion-icon");
            rightArrowIcon.name = "arrow-forward";
            return rightArrowIcon;
        }

        [createArrowContainer] = () => {
            const arrowContainer = document.createElement("div");
            arrowContainer.className = "arrow-container";

            const rightArrow = this[createRightArrow]();
            const leftArrow = this[createLeftArrow]();

            arrowContainer.appendChild(rightArrow);
            arrowContainer.appendChild(leftArrow);

            return arrowContainer;
        }
        arrows() {
            const container = document.getElementById("root");
            
            const arrowContainer = this[createArrowContainer]();

            container.appendChild(arrowContainer);
        }

    }

    module.exports = Views;
});