const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function updateIcon(theme) {
  toggle.textContent = theme === 'dark' ? '🌙' : '🌞';
}

function updateClass(theme) {
  toggle.classList.remove('primary', 'secondary');
  toggle.classList.add(theme === 'dark' ? 'secondary' : 'primary');
}

toggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
  updateClass(newTheme);
});

// Initial theme setup
const savedTheme = localStorage.getItem('theme');
const defaultTheme = savedTheme || 'light';
html.setAttribute('data-theme', defaultTheme);
updateIcon(defaultTheme);
updateClass(defaultTheme); 
