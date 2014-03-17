$('*[data-behavior=show_setting]').on('click', function(event) {
  $('#setting').slideDown();
  $('*[data-behavior=show_setting]').hide();
});

$('*[data-behavior=hide_setting]').on('click', function(event) {
  $('#setting').slideUp();
  $('*[data-behavior=show_setting]').fadeIn();
});
