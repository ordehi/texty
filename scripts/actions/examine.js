function examine(params, gameState) {
  const target = params[0];

  if (gameState.inventory.some((item) => item.noun === target)) {
    gameState.addMessage(`You examine the ${target}. ${item.description}`);
  } else if (gameState.currentLocation.interactables[target]) {
    gameState.addMessage(
      `You examine the ${target}. ${gameState.currentLocation.interactables[target].description}`
    );
  } else {
    gameState.addMessage(`You don't see a ${target} here.`);
  }

  return gameState;
}

export default examine;
