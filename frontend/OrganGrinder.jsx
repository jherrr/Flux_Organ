var ReactDOM = require('react-dom');
var React = require('react');
var ActionsCreator = require("./actions/action_creator.jsx");
var Organ = require("./components/organ.jsx");

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#root');
  ReactDOM.render(<Organ/>, root);
});
