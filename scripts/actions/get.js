function get(params, gameState) {
  const itemKey = params[0];
  const currentLocation = gameState.currentLocation;

  if (currentLocation.interactables[itemKey]) {
    gameState.inventory.push(currentLocation.interactables[itemKey]);
    delete currentLocation.interactables[itemKey];
    gameState.addMessage(`You took the ${itemKey}.`);
  } else {
    gameState.addMessage(`There is no ${itemKey} here.`);
  }

  return gameState;
}

export default get;
