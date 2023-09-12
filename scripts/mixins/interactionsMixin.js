function interactionsMixin(obj) {
  obj.interactions = {};

  obj.addInteraction = function (interactionKey, textResponse, actionResponse) {
    if (!this.interactions[interactionKey]) {
      this.interactions[interactionKey] = {
        textResponse,
        actionResponse,
      };
    } else {
      console.error('Interaction key already exists!');
    }
  };

  obj.getInteraction = function (interactionKey) {
    return this.interactions[interactionKey];
  };
}

export default interactionsMixin;
