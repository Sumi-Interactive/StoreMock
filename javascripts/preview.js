$(document).ready(function($) {
  $('#pre_iPhone').click(function(event) {
    $('#pre_frame').removeClass().addClass('iPhone');
    $('#preview section').removeClass().addClass('iPhone');
    $("#pre_body").removeClass().addClass('iPhone');
  });

  $('#pre_iPad').click(function(event) {
    $('#pre_frame').removeClass().addClass('iPad');
    $('#preview section').removeClass().addClass('iPad');
    $("#pre_body").removeClass().addClass('iPad');
  });

  $('#pre_mac').click(function(event) {
    
  });

  $('#pre_web').click(function(event) {
    
  });

});