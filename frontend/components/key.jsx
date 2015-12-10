var React = require('react');
var Note = require('../util/Note.js');
var KeyStore = require("../stores/keystore.js");
var TONES = require("../constants/Tones.js");

var Key = React.createClass({
  getInitialState: function() {
    return ({pressed: false});
  },
  _keysChanged: function() {
    var allTheKeys = KeyStore.all();
    var keyIsIn = false;
    var noteName = this.props.noteName;

    allTheKeys.forEach( function(key) {
      if(key === noteName ) {
        keyIsIn = true;
      }
    });

    // maybe make this a helper method
    if(keyIsIn) {
      this.note.start();
      this.setState({pressed: true});
    }
    else {
      this.note.stop();
      this.setState({pressed: false});
    }

  },
  componentDidMount: function() {
    var freq = TONES[this.props.noteName];
    this.note = new Note(freq);
    KeyStore.addListener(this._keysChanged);
  },
  componentWillUnmount: function() {
    this.note.stop();
    KeyStore.removeListener(this._keysChanged);
  },

  render: function() {
    var keyType;
    if(this.props.noteName.indexOf("#") !== -1)
    {
      keyType = "key-black"; // key-black instead of key_black
    } else {
      keyType = "key-white";
    }

    if (this.state.pressed) {
      keyType+= " key-pressed";
    }
    return (
      <div className = {keyType}></div>
    );
  }
});

module.exports = Key;
