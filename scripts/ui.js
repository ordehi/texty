import { gameFilenames } from './config.js';

export function initializeGameSelection(callback) {
  const gameSelect = document.getElementById('gameSelect');
  const loadGameBtn = document.getElementById('loadGameBtn');
  const gameManagement = document.querySelector('.game-management');
  const toggleGameManagementBtn = document.getElementById(
    'toggleGameManagement'
  );

  const toggleHandler = (event) => {
    event.stopPropagation();
    const isVisible = gameManagement.classList.toggle('visible');
    gameManagement.setAttribute('aria-hidden', !isVisible);
    toggleGameManagementBtn.setAttribute('aria-expanded', isVisible);
  };

  toggleGameManagementBtn.replaceWith(toggleGameManagementBtn.cloneNode(true));
  const newToggleBtn = document.getElementById('toggleGameManagement');

  newToggleBtn.addEventListener('click', toggleHandler);

  // Load games
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

  gameSelect.addEventListener('change', function () {
    if (gameSelect.value) {
      loadGameBtn.disabled = false;
    } else {
      loadGameBtn.disabled = true;
    }
  });

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

  window.addEventListener('click', function (event) {
    if (
      !gameManagement.contains(event.target) &&
      !newToggleBtn.contains(event.target)
    ) {
      gameManagement.classList.remove('visible');
    }
  });

  toggleGameManagementBtn.removeEventListener('click', toggleHandler);
  toggleGameManagementBtn.addEventListener('click', toggleHandler);
}
