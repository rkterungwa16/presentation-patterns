
define(function (require, exports, module) {
    class Model {
        constructor() {
            this.slideIndex = 1;
            this.currentExpandedImageId = 1
            this.images = [
                {
                    url: "./assets/images/nike_women_sock_dart_br_nsw_black.jpg",
                    caption: "Nike Women Sock Dart BR NSW Black",
                    id: 1
                },
                {
                    url: "./assets/images/nike_women_trail_running_shoes_purple.jpg",
                    caption: "Nike Women Trail Running Shoes Purple",
                    id: 2
                },
                {
                    url: "./assets/images/puma_women_black_casual_shoes.jpg",
                    caption: "Puma Women Black Casual Shoes",
                    id: 3
                },
                {
                    url: "./assets/images/puma_women_white_running_shoes.jpg",
                    caption: "Puma Women White Running Shoes",
                    id: 4
                }
            ];
        }

    }

    module.exports = Model;
});