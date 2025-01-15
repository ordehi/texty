function use(params, gameState) {
  const searchItem = params[0].toLowerCase();
  let message = '';

  const inventoryItem = gameState.inventory.find(
    (item) => item.noun.toLowerCase() === searchItem
  );

  if (inventoryItem) {
    // Here, you'd invoke some item-specific behavior.
    // For simplicity, let's just log that the item was used.
    message = `You used the ${inventoryItem.noun}.`;
  } else {
    message = `You don't have a ${params[0]} in your inventory.`;
  }

  return message;
}

export default use;
