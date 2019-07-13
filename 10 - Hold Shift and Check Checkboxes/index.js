const checkboxes = Array.from(document.querySelectorAll('.item input'));
let lastChecked;

// old-school es5 function needed in order to capture proper value of "this"
function handleCheck(e) {
  const thisBox = this;
  const isChecked = thisBox.checked;
  if (isChecked) {
    if (lastChecked !== null && e.shiftKey) {
      const thisIndex = checkboxes.indexOf(thisBox);
      const lastCheckedIndex = checkboxes.indexOf(lastChecked);
      checkboxes.forEach((_box) => {
        if (checkboxes.indexOf(_box) > lastCheckedIndex && checkboxes.indexOf(_box) < thisIndex) {
          _box.checked = true;
        } else if (checkboxes.indexOf(_box) < lastCheckedIndex && checkboxes.indexOf(_box) > thisIndex) {
          _box.checked = true;
        }
      });
    }
    lastChecked = this;
  }
}

checkboxes.forEach((box) => {
  box.addEventListener('click', handleCheck);
});
