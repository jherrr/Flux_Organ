var KeyListener = {};

KeyListener.addListener = function(event, callback) {

  $(document).on(event, function(e) {
    var keyCode = e.keyCode;
    console.log(event);
    var mappedKey = Mapping[keyCode];

    callback(mappedKey);
  });
};


var Mapping = {
  65: 'C4',
  87: 'C#4',
  83: 'D4',
  69: 'D#4',
  68: 'E4',
  70: 'F4',
  89: 'F#4',
  74: 'G4',
  85: 'G#4',
  75: 'A4',
  73: 'A#4',
  76: 'B4',
  186: 'C5'
};





module.exports = KeyListener;
