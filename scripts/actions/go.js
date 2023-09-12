function go(params, gameState) {
  const direction = params[0];
  const currentLocation = gameState.currentLocation;

  if (currentLocation.exits[direction]) {
    gameState.currentLocation = currentLocation.exits[direction].location;
    gameState.addMessage(`You move to the ${gameState.currentLocation.name}`);
  } else {
    gameState.addMessage('You cannot go that way.');
  }

  return gameState;
}

export default go;
