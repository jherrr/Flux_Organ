var React = require('react');
var Track = require('../util/Track.js');
var Keystore = require('../stores/keystore.js');

var Recorder = React.createClass({

getInitialState: function ()
 {
   return {isRecording: false, Track: new Track(), listenerToken: {}
};

},

start: function () {
  var track = this.state.Track;
  track.startRecording();
  this.state.listenerToken = Keystore.addListener(function() {
    track.addNotes(Keystore.all);

  });
},

stop: function () {
  var track = this.state.Track;
  track.stopRecording();
  this.state.listenerToken.remove();
},

render: function () {

  return (<div>
    <button onClick = {this.start}>Start</button>
    <button onClick = {this.stop}>Stop</button>
  </div>);


}




});

module.exports = Recorder;
