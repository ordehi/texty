function interactionsMixin(obj) {
  obj.interactions = {};

  obj.addInteraction = function (interactionKey, interaction) {
    if (!this.interactions[interactionKey]) {
      this.interactions[interactionKey] = interaction;
    } else {
      console.error('Interaction key already exists!');
    }
  };

  obj.getInteraction = function (interactionKey) {
    return this.interactions[interactionKey];
  };
}

export default interactionsMixin;
