$('*[data-behavior=show_setting]').on('click', function(event) {
  $('#setting').slideDown();
});

$('*[data-behavior=hide_setting]').on('click', function(event) {
  $('#setting').slideUp();
});
