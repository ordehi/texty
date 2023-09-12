function get(params, gameState) {
  const itemKey = params[0];
  const currentLocation = gameState.currentLocation;
  let message = '';

  if (currentLocation.interactables[itemKey]) {
    gameState.inventory.push(currentLocation.interactables[itemKey]);
    delete currentLocation.interactables[itemKey];
    message = `You took the ${itemKey}.`;
  } else {
    message = `There is no ${itemKey} here.`;
  }

  return message;
}

export default get;
