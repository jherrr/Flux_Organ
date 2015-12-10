var KeyListener = require('../util/KeyListener');
var AppDispatcher = require('../dispatcher/Dispatcher.js');

var ActionCreator = {};

ActionCreator.createKeyDownAction = function(mappedKey) {
  var keyDownAction = {actionType: "ADD_KEY", key: mappedKey};
  return keyDownAction;
};

KeyListener.addListener("keydown", function(e) {
  var keyDownAction = ActionCreator.createKeyDownAction(e);

  AppDispatcher.dispatch(keyDownAction);
});

ActionCreator.createKeyUpAction = function(mappedKey) {
  var keyUpAction = {actionType: "REMOVE_KEY", key: mappedKey};

  return keyUpAction;
};

ActionCreator.inputDownMappedKey = function(mappedKey) {
  var keyDownAction = this.createKeyDownAction(mappedKey);
  AppDispatcher.dispatch(keyDownAction);
};

KeyListener.addListener("keyup", function(e) {
  var keyUpAction = ActionCreator.createKeyUpAction(e);
  AppDispatcher.dispatch(keyUpAction);
});


module.exports = ActionCreator;
