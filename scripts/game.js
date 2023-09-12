import GameState from './classes/GameState.js';
import Location from './classes/Location.js';
import Interactable from './classes/Interactable.js';
import actions from './actions/actionsExport.js';

// Game State
const gameState = new GameState();

function renderGameState() {
  const outputArea = document.getElementById('outputArea');

  // Start from the message after the last rendered one
  for (
    let i = gameState.lastRenderedIndex + 1;
    i < gameState.messageLog.length;
    i++
  ) {
    // If the message starts with the prompt, add an extra newline before it.
    if (gameState.messageLog[i].startsWith('->')) {
      outputArea.value += '\n';
    }
    outputArea.value += gameState.messageLog[i] + '\n';
  }

  // Update the last rendered index
  gameState.lastRenderedIndex = gameState.messageLog.length - 1;

  // Scroll the textarea to the bottom to always show the latest messages
  outputArea.scrollTop = outputArea.scrollHeight;
}

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

  renderGameState();
}

function processInput(action, params, gameState) {
  // Add the user input to the messageLog
  gameState.addMessage(`-> ${action} ${params.join(' ')}`);

  // Execute the action and capture the result
  const actionFunction = actions[action];

  if (actionFunction) {
    const response = actionFunction(params, gameState);
    if (response) {
      gameState.addMessage(response);
    }
  } else {
    gameState.addMessage(`I don't know how to "${action}".`);
  }
}

// Main game loop
function gameLoop(input) {
  const [action, ...params] = input.split(' ');
  processInput(action, params, gameState);

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
