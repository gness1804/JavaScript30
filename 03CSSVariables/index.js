const inputs = document.querySelectorAll('.controls input');
const root = document.documentElement;

inputs.forEach(input => {
  input.addEventListener('change', (e) => {
    const val = e.target.value;
    const { id } = input;
    const { sizing } = input.dataset;
    if (sizing) {
      root.style.setProperty(`--${id}`, `${val}${sizing}`);
    } else {
      root.style.setProperty(`--${id}`, `${val}`);
    }
  });
});
