const checkboxes = Array.from(document.querySelectorAll('.item input'));
let lastCheckedIndex = null;

checkboxes.forEach((box) => {
  box.addEventListener('click', (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      if (lastCheckedIndex !== null && e.shiftKey) {
        const thisIndex = checkboxes.indexOf(box);
        checkboxes.forEach((_box) => {
          if (checkboxes.indexOf(_box) > lastCheckedIndex && checkboxes.indexOf(_box) < thisIndex) {
            _box.checked = true;
          } else if (checkboxes.indexOf(_box) < lastCheckedIndex && checkboxes.indexOf(_box) > thisIndex) {
            _box.checked = true;
          }
        });
      }
      lastCheckedIndex = checkboxes.indexOf(box);
    }
  });
});
