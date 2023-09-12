function inventory(_, gameState) {
  // Notice the _ since we don't need params here
  let message = '';

  if (gameState.inventory.length > 0) {
    const items = gameState.inventory.map((item) => item.noun).join(', ');
    message = `You have: ${items}`;
  } else {
    message = 'Your inventory is empty.';
  }

  return message;
}

export default inventory;
