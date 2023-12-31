import interactionsMixin from '../mixins/interactionsMixin.js';

class Interactable {
  constructor(itemName, itemDescription = '') {
    this.script = 'Interactable';
    this.noun = itemName;
    this.description = itemDescription;
    interactionsMixin(this); // Add interactions functionality
  }
}

export default Interactable;
