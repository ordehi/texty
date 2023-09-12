function examine(params, gameState) {
  const target = params[0];
  let message = '';

  if (gameState.inventory.some((item) => item.noun === target)) {
    message = `You examine the ${target}. ${item.description}`;
  } else if (
    gameState?.currentLocation?.interactables &&
    gameState.currentLocation.interactables[target]
  ) {
    message = `You examine the ${target}. ${gameState.currentLocation.interactables[target].description}`;
  } else {
    message = `You don't see a ${target} here.`;
  }

  return message;
}

export default examine;
