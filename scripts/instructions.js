document.addEventListener('DOMContentLoaded', () => {
  const instructions = document.getElementById('instructions');
  const toggleInstructionsBtn = document.getElementById('toggleInstructions');

  const toggleInstructions = (event) => {
    event.stopPropagation();
    const isVisible = instructions.classList.toggle('visible');
    instructions.setAttribute('aria-hidden', !isVisible);
    toggleInstructionsBtn.setAttribute('aria-expanded', isVisible);
  };

  toggleInstructionsBtn.addEventListener('click', toggleInstructions);

  // Close instructions when clicking outside
  window.addEventListener('click', (event) => {
    if (
      !instructions.contains(event.target) &&
      !toggleInstructionsBtn.contains(event.target)
    ) {
      instructions.classList.remove('visible');
      instructions.setAttribute('aria-hidden', true);
      toggleInstructionsBtn.setAttribute('aria-expanded', false);
    }
  });
});
