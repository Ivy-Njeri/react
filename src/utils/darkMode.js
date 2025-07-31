export function toggleDarkMode() {
  const html = document.documentElement;
  html.classList.toggle('dark');

  // Optional: Save user preference to localStorage
  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Auto-load user preference
export function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  const html = document.documentElement;
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}
