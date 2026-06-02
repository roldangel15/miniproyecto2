const themeCheckbox = document.querySelector('.theme-switch__checkbox');

// Escucha cuando el estado del checkbox cambia
themeCheckbox.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});