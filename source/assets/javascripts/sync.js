var syncImages = function() {
  var deviceNames = ['iPhone', 'iPad'];

  $.each(deviceNames, function(index, deviceName) {
    var $images = $("#" + deviceName + " li img");
    var $dests = $("." + deviceName + " ul li img");

    $dests.each(function(index, dest) {
      var srcImg = $($images[index]).attr('src');
      $(dest).attr('src', srcImg);
    });
  });
}
