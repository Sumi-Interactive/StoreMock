$(document).ready(function($) {
  $('#pre_iPhone').click(function(event) {
    $('#preview section.iPhone').show();
    $('#preview section.iPad').hide();
    $('#preview section.mac').hide();
    $('#preview section.web').hide();
  });

  $('#pre_iPad').click(function(event) {
    $('#preview section.iPhone').hide();
    $('#preview section.iPad').show();
    $('#preview section.mac').hide();
    $('#preview section.web').hide();
  });

  $('#pre_mac').click(function(event) {
    $('#preview section.iPhone').hide();
    $('#preview section.iPad').hide();
    $('#preview section.mac').show();
    $('#preview section.web').hide();
  });

  $('#pre_web').click(function(event) {
    $('#preview section.iPhone').hide();
    $('#preview section.iPad').hide();
    $('#preview section.mac').hide();
    $('#preview section.web').show();
  });

});