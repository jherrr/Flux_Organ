var TONES = require('../constants/Tones.js');
var KeyStore = require('../stores/keystore.js');
var ActionCreator = require('../actions/action_creator.jsx');

function Track (name, roll) {
  if (typeof roll === "undefined")
    {roll = [];}
  this.roll = roll;
  this.name = name;
}

Track.prototype.start = function (callback) {
  if ( typeof this.interval === "undefined" ) {
    var playbackStartTime = Date.now();
    var currNotesIdx = 0;

    var intervalId = setInterval(function() {
      var keys = Object.keys(TONES);
      var roll = this.roll;
      var currNotes = roll[currNotesIdx].notes;

      var validNotes = [];
      currNotes.forEach( function(note) {
        if ( keys.indexOf(note) !== -1 ) {
          ActionCreator.inputDownMappedKey(note);
        }
      });

      var timeElapsed = Date.now() - playbackStartTime;
      if ( timeElapsed > roll[currNotesIdx].timeSlice ) {
        
        currNotesIdx++;
      }
      callback();
    }, 10);

  } else {
    return;
  }

};


Track.prototype.startRecording = function ()
{
  this.roll = [];
  this.time = Date.now();

};

Track.prototype.addNotes = function (newNotes)
{
  this.roll.push({notes: newNotes, timeSlice: Date.now() - this.time});

};

Track.prototype.stopRecording = function ()
{
  this.roll.push({notes: [], timeSlice: Date.now() - this.time});

};

module.exports = Track;
