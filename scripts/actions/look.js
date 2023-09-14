function look(params, gameState) {
  const currentLocation = gameState.currentLocation;

  if (!currentLocation) {
    return 'You see nothing special.';
  }

  let message = `${currentLocation.name}`;
  message += `\n${currentLocation.description}\n`;

  // List available exits
  if (currentLocation.exits && Object.keys(currentLocation.exits).length > 0) {
    const exitDirections = Object.keys(currentLocation.exits)
      .map(
        (exitDir) =>
          `${exitDir} to ${currentLocation.exits[exitDir].location.name}`
      )
      .join(', ');
    message += `\nExits: ${exitDirections}`;
  } else {
    message += `\nThere are no visible exits.`;
  }

  // List interactable items
  if (
    currentLocation.interactables &&
    Object.keys(currentLocation.interactables).length > 0
  ) {
    const interactableNames = Object.keys(currentLocation.interactables)
      .map((itemName) => `${currentLocation.interactables[itemName].noun}`)
      .join(', ');
    message += `\nYou see: ${interactableNames}`;
  } else {
    message += `\nThere are no items here.`;
  }

  return message;
}

export default look;
