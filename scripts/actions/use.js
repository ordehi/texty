function use(params, gameState) {
  const itemToUse = params[0];

  if (gameState.inventory.some((item) => item.noun === itemToUse)) {
    // Here, you'd invoke some item-specific behavior.
    // For simplicity, let's just log that the item was used.
    gameState.addMessage(`You used the ${itemToUse}.`);
  } else {
    gameState.addMessage(`You don't have a ${itemToUse} in your inventory.`);
  }

  return gameState;
}

export default use;
