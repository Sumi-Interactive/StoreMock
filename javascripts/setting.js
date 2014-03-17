$('*[data-behavior=hide_setting]').on('click', function(event) {
  $('#setting').toggleClass('slide-up');
  $('#setting i').toggleClass('fa-angle-double-up');
  $('#setting i').toggleClass('fa-angle-double-down');
});
