const spacingBar = document.getElementById('spacing');
const blurBar = document.getElementById('blur');
const colorPicker = document.getElementById('base');
const root = document.documentElement;

spacingBar.addEventListener('change', (e) => {
  const val = e.target.value;
  root.style.setProperty('--spacing', `${val}px`);
});

blurBar.addEventListener('change', (e) => {
  const val = e.target.value;
  root.style.setProperty('--blur', `${val}px`);
});

colorPicker.addEventListener('change', (e) => {
  const val = e.target.value;
  root.style.setProperty('--base', `${val}`);
});
