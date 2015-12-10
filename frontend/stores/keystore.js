var Store = require('flux/utils').Store;
var KeyDispatcher = require('../dispatcher/Dispatcher.js');

var KeyStore = new Store(KeyDispatcher);

var _keys = [];

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "ADD_KEY":
      addKey(payload.key);
      break;
    case "REMOVE_KEY":
      removeKey(payload.key);
      break;
  }

};

var addKey = function(mappedKey) {
  if(_keys.indexOf(mappedKey) === -1)
  {_keys.push(mappedKey);
    KeyStore.__emitChange();}

};

var removeKey = function(mappedKey) {
  var index = _keys.indexOf(mappedKey);
  if(index !== -1) {
    _keys.splice(index,1);
  } else {
    console.log("key not found");
  }
  KeyStore.__emitChange();
};

KeyStore.all = function() {
  return _keys.slice();
};

module.exports = KeyStore;
