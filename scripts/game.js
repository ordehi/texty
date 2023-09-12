import GameState from './classes/GameState.js';
import Location from './classes/Location.js';
import Interactable from './classes/Interactable.js';

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
  gameState.messageLog.push(
    "You wake up in a dimly lit room. You don't remember how you got here."
  );
}

// Main game loop
function gameLoop(input) {
  // Process input (This could be more detailed, using regex or other methods to parse player input)
  const [action, ...params] = input.split(' ');

  switch (action.toLowerCase()) {
    case 'go':
      handleGoAction(params[0]); // params[0] would be the direction, e.g., "north"
      break;
    case 'get':
      handleGetAction(params.join(' ')); // join the rest of the params to get item name
      break;
    case 'examine':
      handleExamineAction(params.join(' '));
      break;
    case 'inventory':
      handleInventoryAction();
      break;
    case 'use':
      handleUseAction(params.join(' '));
      break;
    default:
      gameState.messageLog.push("Sorry, I don't understand that command.");
  }

  // Render game state to the UI (pseudo code)
  renderGameState();
}

// Sample action handlers
function handleGoAction(direction) {
  // Logic for moving between locations
}

function handleGetAction(itemName) {
  // Logic for picking up items
}

function handleExamineAction(subject) {
  // Logic for examining items or locations
}

function handleInventoryAction() {
  // Logic for showing player's inventory
}

function handleUseAction(itemName) {
  // Logic for using items
}

// Game entry point
initGame();
