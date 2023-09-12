function go(direction) {
  // Here, `locations` is a hypothetical data structure storing adjacent locations.
  const locations = {
    north: 'The Forest',
    south: 'The Beach',
    // ... other directions
  };

  const newLocation = locations[direction];

  if (newLocation) {
    console.log(`You moved to ${newLocation}`);
    // Update the player's current location
    currentPlayerLocation = newLocation;
  } else {
    console.log(`You can't go that way.`);
  }
}

export default go;
