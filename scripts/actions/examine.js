function examine(params, gameState) {
  const searchTarget = params[0].toLowerCase();
  let message = '';

  const inventoryItem = gameState.inventory.find(
    (item) => item.noun.toLowerCase() === searchTarget
  );

  if (inventoryItem) {
    message = `You examine the ${inventoryItem.noun}. ${inventoryItem.description}`;
  } else if (gameState?.currentLocation?.interactables) {
    const matchingKey = Object.keys(
      gameState.currentLocation.interactables
    ).find((key) => key.toLowerCase() === searchTarget);

    if (matchingKey) {
      message = `You examine the ${matchingKey}. ${gameState.currentLocation.interactables[matchingKey].description}`;
    } else {
      message = `You don't see a ${params[0]} here.`;
    }
  } else {
    message = `You don't see a ${params[0]} here.`;
  }

  return message;
}

export default examine;
