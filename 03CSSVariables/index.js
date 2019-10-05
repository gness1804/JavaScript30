const inputs = document.querySelectorAll('.controls input');
const root = document.documentElement;

const handleUpdate = (e, input) => {
  const { value } = e.target;
  const { id } = input;
  const suffix = input.dataset.sizing || '';
  root.style.setProperty(`--${id}`, `${value}${suffix}`);
};

inputs.forEach(input => {
  input.addEventListener('change', e => handleUpdate(e, input));
});
