function interactionsMixin(obj) {
  obj.Interactions = { size: 0 };

  obj.addInteraction = function (interactionKey, textResponse, actionResponse) {
    if (!this.Interactions[interactionKey]) {
      this.Interactions[interactionKey] = {
        textResponse,
        actionResponse,
      };
      this.Interactions.size++;
    } else {
      console.error('Interaction key already exists!');
    }
  };

  obj.getInteraction = function (interactionKey) {
    return this.Interactions[interactionKey];
  };
}

export default interactionsMixin;
