export async function initializeGameSelection(callback) {
  const selectElement = document.getElementById('gameSelect');
  const loadGameBtn = document.getElementById('loadGameBtn');

  // 1. Load games from localStorage:
  // for (let key in localStorage) {
  //   if (localStorage.hasOwnProperty(key)) {
  //     const gameData = JSON.parse(localStorage.getItem(key));
  //     if (gameData && gameData.game) {
  //       const option = document.createElement('option');
  //       option.value = key; // the key from localStorage
  //       option.textContent = gameData.game;
  //       selectElement.appendChild(option);
  //     }
  //   }
  // }

  // 2. Load games from the "games" folder:
  // This assumes you have an endpoint or a known list of games in the folder.
  // For the sake of simplicity, I'm assuming you have a list of game filenames.
  const gameFilenames = ['example.json']; // Example filenames
  for (const filename of gameFilenames) {
    try {
      const response = await fetch(`./games/${filename}`);
      const gameData = await response.json();
      const option = document.createElement('option');
      option.value = `./games/${filename}`; // the path to the game
      option.textContent = gameData.game;
      selectElement.appendChild(option);
    } catch (error) {
      console.error('Error fetching game data:', error);
    }
  }

  // Event listener for game selection change:
  selectElement.addEventListener('change', function () {
    if (selectElement.value) {
      loadGameBtn.removeAttribute('disabled');
    } else {
      loadGameBtn.setAttribute('disabled', 'true');
    }
  });

  // Event listener for the "Load" button:
  loadGameBtn.addEventListener('click', async function () {
    const selectedValue = selectElement.value;

    let gameData;
    if (selectedValue.startsWith('./games/')) {
      // Fetch the game from the server:
      const response = await fetch(selectedValue);
      gameData = await response.json();
    } else {
      // Load from localStorage:
      gameData = JSON.parse(localStorage.getItem(selectedValue));
    }

    if (gameData) {
      callback(gameData); // Assuming you have a function to start a game with the provided data
    }
  });
}

// Add helper function to close dropdown
function closeDropdown() {
  const dropdown = document.querySelector('.dropdown-content');
  if (dropdown) {
    dropdown.style.display = 'none';
  }
}

// Add click listener to window
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropbtn')) {
    closeDropdown();
  }
});

// Modify load game button click handler
document.getElementById('loadGameBtn').addEventListener('click', () => {
  const selectedGame = document.getElementById('gameSelect').value;
  if (selectedGame) {
    loadGame(selectedGame);
    closeDropdown();
  }
});

// Modify existing dropdown button click handler
document.querySelector('.dropbtn').addEventListener('click', (event) => {
  const dropdown = document.querySelector('.dropdown-content');
  dropdown.style.display =
    dropdown.style.display === 'block' ? 'none' : 'block';
  event.stopPropagation();
});

// Add click handler to window
window.addEventListener('click', (event) => {
  const gameManagement = document.querySelector('.game-management');
  const toggleButton = document.getElementById('toggleGameManagement');

  if (
    !gameManagement.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    gameManagement.classList.remove('visible');
  }
});

// Modify load game handler
document.getElementById('loadGameBtn').addEventListener('click', () => {
  const selectedGame = document.getElementById('gameSelect').value;
  if (selectedGame) {
    loadGame(selectedGame);
    document.querySelector('.game-management').classList.remove('visible');
  }
});
