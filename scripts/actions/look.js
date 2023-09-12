function look(params, gameState) {
  const currentLocation = gameState.currentLocation;

  if (!currentLocation || !currentLocation.interactables) {
    return 'You see nothing special.';
  }

  let message = currentLocation.description;

  // List available exits
  const exits = Object.values(currentLocation.exits);
  if (exits.length > 0) {
    const exitDescriptions = exits.map((exit) => exit.description).join(', ');
    message += `\nExits: ${exitDescriptions}`;
  } else {
    message += `\nThere are no visible exits.`;
  }

  // List interactable items
  const interactables = Object.values(currentLocation.interactables);
  if (interactables.length > 0) {
    const interactableNames = interactables.map((item) => item.noun).join(', ');
    message += `\nYou see: ${interactableNames}`;
  } else {
    message += `\nThere are no items here.`;
  }

  return message;
}

export default look;
