document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('theme-checkbox');

  // Dark mode toggle logic
  darkModeToggle.addEventListener('change', function () {
    const theme = this.checked ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('dark-mode', theme);
  });

  const savedTheme = localStorage.getItem('dark-mode') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  darkModeToggle.checked = savedTheme === 'dark';
});
