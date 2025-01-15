export function initializeGameSelection(callback) {
  const gameSelect = document.getElementById('gameSelect');
  const loadGameBtn = document.getElementById('loadGameBtn');
  const gameManagement = document.querySelector('.game-management');
  const toggleGameManagementBtn = document.getElementById(
    'toggleGameManagement'
  );

  // Log for debugging
  console.log('Game management element:', gameManagement);
  console.log('Toggle button:', toggleGameManagementBtn);

  // Clear existing event listeners
  toggleGameManagementBtn.replaceWith(toggleGameManagementBtn.cloneNode(true));
  const newToggleBtn = document.getElementById('toggleGameManagement');

  // Add toggle event listener
  newToggleBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent event bubbling
    const isVisible = gameManagement.classList.toggle('visible');
    gameManagement.setAttribute('aria-hidden', !isVisible);
    newToggleBtn.setAttribute('aria-expanded', isVisible);
    console.log('Toggle clicked, visibility:', isVisible); // Debug log
  });

  // Load games (mock example with filenames for simplicity)
  const gameFilenames = ['example.json'];
  (async () => {
    for (const filename of gameFilenames) {
      try {
        const response = await fetch(`./games/${filename}`);
        const gameData = await response.json();
        const option = document.createElement('option');
        option.value = `./games/${filename}`;
        option.textContent = gameData.game;
        gameSelect.appendChild(option);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    }
  })();

  // Enable/disable load button based on selection
  gameSelect.addEventListener('change', function () {
    if (gameSelect.value) {
      loadGameBtn.disabled = false;
    } else {
      loadGameBtn.disabled = true;
    }
  });

  // Load game logic
  loadGameBtn.addEventListener('click', async function () {
    const selectedValue = gameSelect.value;

    let gameData;
    if (selectedValue.startsWith('./games/')) {
      const response = await fetch(selectedValue);
      gameData = await response.json();
    } else {
      gameData = JSON.parse(localStorage.getItem(selectedValue));
    }

    if (gameData) {
      callback(gameData);
      gameManagement.classList.remove('visible');
    }
  });

  // Close game management when clicking outside
  window.addEventListener('click', function (event) {
    if (
      !gameManagement.contains(event.target) &&
      !newToggleBtn.contains(event.target)
    ) {
      gameManagement.classList.remove('visible');
    }
  });

  // Remove and add toggle event listener
  toggleGameManagementBtn.removeEventListener('click', toggleHandler);
  toggleGameManagementBtn.addEventListener('click', toggleHandler);
}
