const darkModeToggle = document.getElementsByTagName('html')[0];
const but = document.getElementById('dark-mode');

but.addEventListener('click', () => {
  const currentTheme = darkModeToggle.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  darkModeToggle.setAttribute('data-bs-theme', newTheme);
}, false);