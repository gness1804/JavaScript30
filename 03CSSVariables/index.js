const spacingBar = document.getElementById('spacing');
const blurBar = document.getElementById('blur');
// const baseDisplay = document.getElementById('base');
const root = document.documentElement;

spacingBar.addEventListener('change', (e) => {
  const val = e.target.value;
  root.style.setProperty('--spacing', `${val}px`);
});

blurBar.addEventListener('change', (e) => {
  const val = e.target.value;
  root.style.setProperty('--blur', `${val}px`);
});
