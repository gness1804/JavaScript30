const inputs = document.querySelectorAll('.controls input');
const root = document.documentElement;

const handleUpdate = (e, input) => {
  const { value } = e.target;
  const { id } = input;
  const { sizing } = input.dataset;
  if (sizing) {
    root.style.setProperty(`--${id}`, `${value}${sizing}`);
  } else {
    root.style.setProperty(`--${id}`, `${value}`);
  }
};

inputs.forEach(input => {
  input.addEventListener('change', (e) => handleUpdate(e, input));
});
