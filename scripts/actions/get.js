function get(params, gameState) {
  const searchKey = params[0].toLowerCase();
  const currentLocation = gameState.currentLocation;
  let message = '';

  const matchingKey = Object.keys(currentLocation.interactables).find(
    (key) => key.toLowerCase() === searchKey
  );

  if (matchingKey) {
    gameState.inventory.push(currentLocation.interactables[matchingKey]);
    delete currentLocation.interactables[matchingKey];
    message = `You {verb} the ${matchingKey}.`; // Use placeholder for verb
  } else {
    message = `There is no ${params[0]} here.`;
  }

  return message;
}

export default get;
