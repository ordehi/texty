import GameState from './classes/GameState.js';
import Location from './classes/Location.js';
import Interactable from './classes/Interactable.js';
import actions from './actions/actionsExport.js';

// Game State
const gameState = new GameState();

// Initialize game locations and interactables
function initGame() {
  // Define Interactables
  const key = new Interactable('Key', 'A rusty old key');

  // Define Locations
  const room = new Location('Room', 'A small dimly lit room.');
  const hallway = new Location('Hallway', 'A long, dark hallway.');
  room.addExit('north', {
    description: 'A door to the north.',
    location: hallway,
  });

  // Define starting location
  gameState.currentLocation = room;

  // Initial message
  gameState.addMessage(
    "You wake up in a dimly lit room. You don't remember how you got here."
  );
}

// Update the display with the current game state
function renderGameState() {
  const outputArea = document.getElementById('outputArea');

  // Append the latest message to the output
  outputArea.value +=
    gameState.messageLog[gameState.messageLog.length - 1] + '\n';

  // Optionally, scroll the textarea to the bottom to always show the latest message
  outputArea.scrollTop = outputArea.scrollHeight;
}
3;

function processInput(action, params) {
  return actions[action](params, gameState);
}

// Main game loop
function gameLoop(input) {
  const [action, ...params] = input.split(' ');
  processInput(action, params);

  // Render game state to the UI (pseudo code)
  renderGameState();
}

// Handle the input from the user
document.getElementById('inputArea').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Prevent the newline from being added to the textarea
    event.preventDefault();

    const input = event.target.value;
    gameLoop(input);

    // Optionally, clear the input for the next command
    event.target.value = '';
  }
});

// Game entry point
initGame();
