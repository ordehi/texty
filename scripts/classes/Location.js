import exitsMixin from '../mixins/exitsMixin';
import interactablesMixin from '../mixins/interactablesMixin';

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
