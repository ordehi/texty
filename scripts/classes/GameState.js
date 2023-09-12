class GameState {
  constructor() {
    this.locations = {}; // All locations in the game
    this.currentLocation = null; // Player's current location
    this.inventory = []; // Player's inventory
    this.globalEvents = {}; // Track major game events (e.g., whether a boss is defeated)
    this.messageLog = [];
  }

  addMessage(message) {
    this.messageLog.push(message);
  }

  addLocation(key, location) {
    this.locations[key] = location;
  }

  changeLocation(key) {
    if (this.locations[key]) {
      this.currentLocation = this.locations[key];
    } else {
      console.error('Location not found!');
    }
  }

  addToInventory(item) {
    this.inventory.push(item);
  }

  removeFromInventory(itemKey) {
    this.inventory = this.inventory.filter((item) => item.Noun !== itemKey);
  }

  triggerGlobalEvent(eventKey, eventData) {
    this.globalEvents[eventKey] = eventData;
  }

  getGlobalEvent(eventKey) {
    return this.globalEvents[eventKey];
  }

  serialize() {
    // Convert the game state into a string or other format suitable for saving
    return JSON.stringify(this);
  }

  deserialize(data) {
    // Load the game state from a string or other saved format
    let parsedData = JSON.parse(data);

    for (let key in parsedData) {
      this[key] = parsedData[key];
    }
    // Note: Depending on how complex your objects are, you might need more advanced methods to properly recreate the objects.
  }
}

export default GameState;
