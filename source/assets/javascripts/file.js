function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  $this = $(this);

  var files = evt.originalEvent.dataTransfer.files; // FileList object.

  var file = files[0];

  // Only process image files.
  if (!file.type.match('image.*')) {
    console.log("Not a image");
    return
  }

  var reader = new FileReader();

  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      $this.find('img').attr('src', e.target.result);
    };
  })(file);

  // Read in the image file as a data URL.
  reader.readAsDataURL(file);
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.originalEvent.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

// Setup the dnd listeners.
var dropZones = $('*[data-behavior=drop_zone]');
$(dropZones).on('dragover', handleDragOver);
$(dropZones).on('drop', handleFileSelect);
