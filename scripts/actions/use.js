function use(item) {
  if (playerInventory.includes(item)) {
    console.log(`You used the ${item}`);
    // Additional logic for item-specific actions
  } else {
    console.log(`You don't have a ${item} in your inventory.`);
  }
}

export default use;
