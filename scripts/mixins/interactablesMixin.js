function interactablesMixin(obj) {
  obj.Interactables = { size: 0 };

  obj.addInteractable = function (itemKey, item) {
    if (!this.Interactables[itemKey]) {
      this.Interactables[itemKey] = item;
      this.Interactables.size++;
    } else {
      console.error('Item key already exists!');
    }
  };

  obj.getInteractable = function (itemKey) {
    return this.Interactables[itemKey];
  };
}

export default interactablesMixin;
