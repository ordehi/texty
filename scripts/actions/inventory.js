function inventory(_, gameState) {
  // Notice the _ since we don't need params here
  if (gameState.inventory.length > 0) {
    const items = gameState.inventory.map((item) => item.noun).join(', ');
    gameState.addMessage(`You have: ${items}`);
  } else {
    gameState.addMessage('Your inventory is empty.');
  }

  return gameState;
}

export default inventory;
