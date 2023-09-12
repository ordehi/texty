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

function initGameFromJSON(gameData) {
  // Clear the current game state
  gameState.clear();

  // Create and store Interactables
  const interactables = {}; // Temporary storage to associate interactables with locations
  for (let itemName in gameData.interactables) {
    const item = gameData.interactables[itemName];
    const interactable = new Interactable(itemName, item.description);
    interactables[itemName] = interactable;
  }

  // Create Locations
  for (let locName in gameData.locations) {
    const loc = gameData.locations[locName];
    const location = new Location(locName, loc.description);

    // Add exits
    for (let exitDir in loc.exits) {
      const exitLocName = loc.exits[exitDir];
      location.addExit(
        exitDir,
        `A ${exitDir} exit to ${exitLocName}.`,
        exitLocName
      );
    }

    // Add interactables to the location if specified
    if (loc.interactables) {
      for (let itemName of loc.interactables) {
        if (interactables[itemName]) {
          location.addInteractable(interactables[itemName]);
        }
      }
    }

    // Set the location to the game state
    gameState.addLocation(locName, location);
  }

  // Convert location names in exits to actual location objects
  for (let locName in gameData.locations) {
    const loc = gameState.getLocation(locName);
    for (let exitDir in loc.exits) {
      const exitLocName = loc.exits[exitDir].location;
      loc.exits[exitDir].location = gameState.getLocation(exitLocName);
    }
  }

  // Set the starting location
  gameState.changeLocation(gameData.startingLocation);

  // Initial message
  gameState.addMessage(gameData.initialMessage);

  // Render the game state to show the initial message
  renderGameState();
}

const gameFileInput = document.getElementById('gameFileInput');
const fileNameDisplay = document.getElementById('fileName');

gameFileInput.addEventListener('change', function (event) {
  if (this.files && this.files.length > 0) {
    fileNameDisplay.textContent = `Selected: ${this.files[0].name}`;
  }

  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const gameData = JSON.parse(event.target.result);
    initGameFromJSON(gameData);
  };

  reader.readAsText(file);
});
