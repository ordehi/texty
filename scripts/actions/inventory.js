function inventory() {
  if (playerInventory.length === 0) {
    console.log('Your inventory is empty.');
  } else {
    console.log('You are carrying:');
    playerInventory.forEach((item) => {
      console.log(item);
    });
  }
}

export default inventory;
