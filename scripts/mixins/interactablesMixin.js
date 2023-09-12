function interactablesMixin(obj) {
  obj.interactables = {};

  obj.addInteractable = function (itemKey, item) {
    if (!this.interactables[itemKey]) {
      this.interactables[itemKey] = item;
    } else {
      console.error('Item key already exists!');
    }
  };

  obj.getInteractable = function (itemKey) {
    return this.interactables[itemKey];
  };
}

export default interactablesMixin;
