function go(direction, gameState) {
  const currentLocation = gameState.currentLocation;
  let message = '';

  const directionLower = direction[0].toLowerCase();

  // Find matching direction case-insensitively
  const matchingDirection = Object.keys(currentLocation.exits).find(
    (exit) => exit.toLowerCase() === directionLower
  );

  if (currentLocation && 'exits' in currentLocation && matchingDirection) {
    const targetLocation = currentLocation.exits[matchingDirection].location;

    if (targetLocation) {
      gameState.changeLocation(targetLocation.name);
      message = `You move to the ${targetLocation.name}.`;
      message += `\n${targetLocation.description}`;
    } else {
      message = `The way to the ${direction[0]} is blocked or doesn't lead anywhere.`;
    }
  } else {
    message = `There's no exit to the ${direction[0]}.`;
  }

  return message;
}

export default go;
