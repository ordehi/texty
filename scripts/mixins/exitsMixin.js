function exitsMixin(obj) {
  obj.Exits = { size: 0 };

  obj.addExit = function (exitKey, exitDescription, location) {
    if (!this.Exits[exitKey]) {
      this.Exits[exitKey] = {
        description: exitDescription,
        location,
      };
      this.Exits.size++;
    } else {
      console.error('Exit key already exists!');
    }
  };

  obj.getExit = function (exitKey) {
    return this.Exits[exitKey];
  };
}

export default exitsMixin;
