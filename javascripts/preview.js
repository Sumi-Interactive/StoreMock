$(document).ready(function($) {
  $('#pre_iPhone35in').click(function(event) {
    $('#preview section img').css({
      width: '320px',
      height: '480px'
    });
  });

  $('#pre_iPhone4in').click(function(event) {
    $('#preview section img').css({
      width: '320px',
      height: '568px'
    });
  });


  $('#pre_iPad').click(function(event) {
    $('#preview section img').css({
      width: '768px',
      height: '1024px'
    });
  });

  $('#pre_mac').click(function(event) {
    $('#preview section img').css({
      width: '320px',
      height: '480px'
    });
  });

  $('#pre_web').click(function(event) {
    $('#preview section img').css({
      width: '320px',
      height: '480px'
    });
  });

});