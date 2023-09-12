import exitsMixin from '../mixins/exitsMixin.js';
import interactablesMixin from '../mixins/interactablesMixin.js';

class Location {
  constructor(locationName, locationDescription) {
    this.script = 'Location';
    this.name = locationName;
    this.description = locationDescription;
    exitsMixin(this); // Add exits functionality
    interactablesMixin(this); // Add interactables functionality
  }
}

export default Location;
