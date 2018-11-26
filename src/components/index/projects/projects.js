if ($('.jsProjectsSlider').length > 0) {
  $('.jsProjectsSlider').slick({
    slidesToShow: 1,
    prevArrow: '<button class="projects-prev btn-prev btn-slider"><img src="assets/images/icons/icon-arrow-left.png" alt=""></button>',
    nextArrow: '<button class="projects-next btn-next btn-slider"><img src="assets/images/icons/icon-arrow-right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}
