document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('theme-checkbox');
  const gameManagement = document.querySelector('.game-management');
  const toggleGameManagementBtn = document.getElementById(
    'toggleGameManagement'
  );

  // Dark mode toggle logic
  darkModeToggle.addEventListener('change', function () {
    const theme = this.checked ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('dark-mode', theme);
  });

  const savedTheme = localStorage.getItem('dark-mode') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  darkModeToggle.checked = savedTheme === 'dark';

  // Game management visibility toggle
  toggleGameManagementBtn.addEventListener('click', function () {
    const isVisible = gameManagement.classList.toggle('visible');
    gameManagement.setAttribute('aria-hidden', !isVisible);
    toggleGameManagementBtn.setAttribute('aria-expanded', isVisible);
  });
});
