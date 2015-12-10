var React = require('react');
var Key = require('./key.jsx');
var Note = require('../util/Note.js');
var TONES = require("../constants/Tones.js");
var Recorder = require("./Recorder.jsx");

var Organ = React.createClass({
  render: function () {
    var keyListItems = Object.keys(TONES).map( function(noteName, idx) {
      return (<Key key={idx} noteName={noteName}/>);
    });

    return (
      <div>
        <ul className="organ">{keyListItems}</ul>
        <Recorder />
      </div>
    );
  }
});

module.exports = Organ;
