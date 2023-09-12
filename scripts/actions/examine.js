function examine(object) {
  const descriptions = {
    sword: 'A shiny, sharp blade.',
    beach: 'Golden sands stretch out before you.',
    // ... other objects and locations
  };

  const description = descriptions[object];

  if (description) {
    console.log(description);
  } else {
    console.log(`You don't see anything special about the ${object}.`);
  }
}
export default examine;
