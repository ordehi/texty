function go(direction, gameState) {
  const currentLocation = gameState.currentLocation;
  let message = '';

  // Check if the direction exists in the currentLocation's exits
  if (
    currentLocation &&
    'exits' in currentLocation &&
    currentLocation.exits[direction]
  ) {
    const targetLocation = currentLocation.exits[direction].location;

    if (targetLocation) {
      gameState.changeLocation(targetLocation.name);
      message = `You move to the ${targetLocation.name}.`;
      message += `\n${targetLocation.description}`;
    } else {
      message = `The way to the ${direction} is blocked or doesn't lead anywhere.`;
    }
  } else {
    message = `There's no exit to the ${direction}.`;
  }

  return message;
}

export default go;
