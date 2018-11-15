'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

if ($('.popular__slider-top').length > 0) {
  $('.popular__slider-top').slick({
    slidesToShow: 5,
    prevArrow: '<button class="popular__slider-top-prev btn-prev btn-slider"><img src="assets/images/icons/icon-arrow-left.png" alt=""></button>',
    nextArrow: '<button class="popular__slider-top-next btn-next btn-slider"><img src="assets/images/icons/icon-arrow-right.png" alt=""></button>'
  });
}
//# sourceMappingURL=script.js.map
