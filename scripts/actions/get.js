function get(item) {
  // Assume `currentLocationItems` contains items in the current location.
  if (currentLocationItems.includes(item)) {
    playerInventory.push(item);
    console.log(`You took the ${item}`);
  } else {
    console.log(`There's no ${item} here.`);
  }
}

export default get;
