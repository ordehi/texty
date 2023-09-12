function look(params, gameState) {
  const currentLocation = gameState.currentLocation;

  if (!currentLocation) {
    return 'You see nothing special.';
  }

  let message = `You are in the ${currentLocation.name}.`;
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
    currentLocation.interactables.length > 0
  ) {
    const interactableNames = currentLocation.interactables
      .map((item) => item.noun)
      .join(', ');
    message += `\nYou see: ${interactableNames}`;
  } else {
    message += `\nThere are no items here.`;
  }

  return message;
}

export default look;
