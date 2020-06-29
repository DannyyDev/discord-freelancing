module.exports.execute = function(IDLength) {
    var LIST = '0123456789';
      var UID = '';
      for (var i = 0; i < IDLength; i++) {
        UID += LIST.charAt(Math.floor(Math.random() * LIST.length));
      }
      return UID;
};