
define(function (require, exports, module) {
    class Model {
        constructor() {
            this.currentBrandId = 1;
            this.slideIndex = 1;
            this.currentExpandedImageId = 1
            this.brands = [
                {
                    tag: "Nike Women Sock Dart BR NSW Black",
                    label: "nike",
                    id: 1,
                    images: [
                        {
                            url: "./assets/images/nike_women_sock_dart_br_nsw_black.jpg",
                            caption: "Nike Women Sock Dart BR NSW Black",
                            id: 1
                        },
                        {
                            url: "./assets/images/nike_women_sock_dart_3.jpg",
                            caption: "Nike Women Sock Dart BR NSW Black",
                            id: 2
                        },
                        {
                            url: "./assets/images/nike_women_sock_dart_2.jpg",
                            caption: "Nike Women Sock Dart BR NSW Black",
                            id: 3
                        },
                    ]
                },
                {
                    tag: "Nike Women Trail Running Shoes Purple",
                    label: "nike",
                    id: 2,
                    images: [
                        {
                            url: "./assets/images/nike_women_trail_running_shoes_purple.jpg",
                            caption: "Nike Women Trail Running Shoes Purple",
                            id: 1
                        },
                        {
                            url: "./assets/images/nike_women_trail_running_shoes_purple_2.jpg",
                            caption: "Nike Women Trail Running Shoes Purple",
                            id: 2
                        },
                        {
                            url: "./assets/images/nike_women_trail_running_shoes_purple_3.jpg",
                            caption: "Nike Women Trail Running Shoes Purple",
                            id: 3
                        },
                    ]
                },
                {
                    tag: "Puma Women Black Casual Shoes",
                    label: "puma",
                    id: 3,
                    images: [
                        {
                            url: "./assets/images/puma_women_black_casual_shoes.jpg",
                            caption: "Puma Women Black Casual Shoes",
                            id: 1
                        },
                        {
                            url: "./assets/images/puma_women_black_casual_shoes_3.jpg",
                            caption: "Puma Women Black Casual Shoes",
                            id: 2
                        },
                        {
                            url: "./assets/images/puma_women_black_casual_shoes_4.jpg",
                            caption: "Puma Women Black Casual Shoes",
                            id: 3
                        },
                    ]
                },
                {
                    tag: "Puma Women White Running Shoes",
                    label: "nike",
                    id: 4,
                    images: [
                        {
                            url: "./assets/images/puma_women_white_running_shoes.jpg",
                            caption: "Puma Women White Running Shoes",
                            id: 1
                        },
                        {
                            url: "./assets/images/puma_women_white_running_shoes_3.jpg",
                            caption: "Puma Women White Running Shoes",
                            id: 2
                        }
                    ]
                }
            ]
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