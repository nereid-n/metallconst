$(document).ready(function() {
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
