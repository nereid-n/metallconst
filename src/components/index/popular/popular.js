if ($('.popular__slider-top').length > 0) {
  $('.popular__slider-top').slick({
    slidesToShow: 5,
    prevArrow: '<button class="popular__slider-top-prev btn-prev btn-slider"><img src="assets/images/icons/icon-arrow-left.png" alt=""></button>',
    nextArrow: '<button class="popular__slider-top-next btn-next btn-slider"><img src="assets/images/icons/icon-arrow-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
}

if ($('.popular__slider-bottom').length > 0) {
  $('.popular__slider-bottom').slick({
    prevArrow: false,
    nextArrow: '<button class="popular__slider-bottom-next btn-slider"><img src="assets/images/icons/icon-arrow-right.png" alt=""></button>'
  });
}

if (document.querySelector('.popular__nav-title-js')) {
  let items = document.querySelectorAll('.popular__nav-title-js');
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.onclick = function() {
      let parent = this.closest('.popular__nav-item');
      if (document.querySelector('.popular__nav-active')) {
        let active = document.querySelector('.popular__nav-active');
        if (parent !== active) {
          active.classList.remove('popular__nav-active');
        }
      }
      parent.classList.toggle('popular__nav-active');
    }
  }
}

if (document.querySelector('.popular__dropdown-js')) {
  let items = document.querySelectorAll('.popular__dropdown-js');
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.onclick = function(e) {
      e.preventDefault();
      let href = this.getAttribute('href');
      let content = document.querySelector(href);
      let active = document.querySelector('.popular__dropdown-active');
      if (this !== active) {
        active.classList.remove('popular__dropdown-active');
        this.classList.add('popular__dropdown-active');
      }
      if (!content.classList.contains('popular__content-active')) {
        document.querySelector('.popular__content-active').classList.remove('popular__content-active');
        content.classList.add('popular__content-active');
      }
    }
  }
}
