'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

if (document.querySelector('.jsAnswersLinks')) {
  var items = document.querySelectorAll('.jsAnswersLinks');
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    item.onclick = function (e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      var content = document.querySelector(href);
      var active = document.querySelector('.answer-link-active');
      if (this !== active) {
        active.classList.remove('answer-link-active');
        this.classList.add('answer-link-active');
      }
      if (!content.classList.contains('answer-active')) {
        document.querySelector('.answer-active').classList.remove('answer-active');
        content.classList.add('answer-active');
      }
    };
  }
}

$(document).ready(function () {
  $('.service').select2({
    placeholder: 'Выберите услугу'
  });
  $('.material').select2({
    placeholder: 'Выберите материал'
  });
  $('#checkbox').click(function () {
    if ($(this).is(':checked') == false) {
      $('.jsCheck').attr('disabled', 'disabled');
    } else {
      $('.jsCheck').removeAttr('disabled');
    }
  });
});

if ($('.popular__slider-top').length > 0) {
  $('.popular__slider-top').slick({
    slidesToShow: 5,
    prevArrow: '<button class="popular__slider-top-prev btn-prev btn-slider"><img src="assets/images/icons/icon-arrow-left.png" alt=""></button>',
    nextArrow: '<button class="popular__slider-top-next btn-next btn-slider"><img src="assets/images/icons/icon-arrow-right.png" alt=""></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 450,
      settings: {
        slidesToShow: 2
      }
    }]
  });
}

if ($('.popular__slider-bottom').length > 0) {
  $('.popular__slider-bottom').slick({
    prevArrow: false,
    nextArrow: '<button class="popular__slider-bottom-next btn-slider"><img src="assets/images/icons/icon-arrow-right.png" alt=""></button>'
  });
}

if (document.querySelector('.popular__nav-title-js')) {
  var _items = document.querySelectorAll('.popular__nav-title-js');
  for (var _i = 0; _i < _items.length; _i++) {
    var _item = _items[_i];
    _item.onclick = function () {
      var parent = this.closest('.popular__nav-item');
      if (document.querySelector('.popular__nav-active')) {
        var active = document.querySelector('.popular__nav-active');
        if (parent !== active) {
          active.classList.remove('popular__nav-active');
        }
      }
      parent.classList.toggle('popular__nav-active');
    };
  }
}

if (document.querySelector('.popular__dropdown-js')) {
  var _items2 = document.querySelectorAll('.popular__dropdown-js');
  for (var _i2 = 0; _i2 < _items2.length; _i2++) {
    var _item2 = _items2[_i2];
    _item2.onclick = function (e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      var content = document.querySelector(href);
      var active = document.querySelector('.popular__dropdown-active');
      if (this !== active) {
        active.classList.remove('popular__dropdown-active');
        this.classList.add('popular__dropdown-active');
      }
      if (!content.classList.contains('popular__content-active')) {
        document.querySelector('.popular__content-active').classList.remove('popular__content-active');
        content.classList.add('popular__content-active');
      }
    };
  }
}

if ($('.jsProjectsSlider').length > 0) {
  $('.jsProjectsSlider').slick({
    slidesToShow: 1,
    prevArrow: '<button class="projects-prev btn-prev btn-slider"><img src="assets/images/icons/icon-arrow-left.png" alt=""></button>',
    nextArrow: '<button class="projects-next btn-next btn-slider"><img src="assets/images/icons/icon-arrow-right.png" alt=""></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 450,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}
//# sourceMappingURL=script.js.map
