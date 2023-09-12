function exitsMixin(obj) {
  obj.exits = {};

  obj.addExit = function (exitKey, exitDescription, location) {
    if (!this.exits[exitKey]) {
      this.exits[exitKey] = {
        description: exitDescription,
        location,
      };
    } else {
      console.error('Exit key already exists!');
    }
  };

  obj.getExit = function (exitKey) {
    return this.exits[exitKey];
  };
}

export default exitsMixin;
