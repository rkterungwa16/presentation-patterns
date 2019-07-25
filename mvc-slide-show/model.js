
define(function (require, exports, module) {
    class Model {
        constructor() {
            this.slideIndex = 1;
            this.images = [
                {
                    url: "./assets/images/img_nature_wide.jpg",
                    caption: "Caption One"
                },
                {
                    url: "./assets/images/img_snow_wide.jpg",
                    caption: "Caption Two"
                },
                {
                    url: "./assets/images/img_mountains_wide.jpg",
                    caption: "Caption Three"
                }
            ];

        }

    }

    module.exports = Model;
});