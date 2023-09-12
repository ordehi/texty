function use(params, gameState) {
  const itemToUse = params[0];
  let message = '';

  if (gameState.inventory.some((item) => item.noun === itemToUse)) {
    // Here, you'd invoke some item-specific behavior.
    // For simplicity, let's just log that the item was used.
    message = `You used the ${itemToUse}.`;
  } else {
    message = `You don't have a ${itemToUse} in your inventory.`;
  }

  return message;
}

export default use;
