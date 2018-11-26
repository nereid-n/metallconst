if (document.querySelector('.jsAnswersLinks')) {
  let items = document.querySelectorAll('.jsAnswersLinks');
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    item.onclick = function(e) {
      e.preventDefault();
      let href = this.getAttribute('href');
      let content = document.querySelector(href);
      let active = document.querySelector('.answer-link-active');
      if (this !== active) {
        active.classList.remove('answer-link-active');
        this.classList.add('answer-link-active');
      }
      if (!content.classList.contains('answer-active')) {
        document.querySelector('.answer-active').classList.remove('answer-active');
        content.classList.add('answer-active');
      }
    }
  }
}
