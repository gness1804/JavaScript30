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
      checkboxes.forEach(box => {
        const inBetween =
          (checkboxes.indexOf(box) > lastCheckedIndex &&
            checkboxes.indexOf(box) < thisIndex) ||
          (checkboxes.indexOf(box) < lastCheckedIndex &&
            checkboxes.indexOf(box) > thisIndex);
        if (inBetween) {
          box.checked = true;
        }
      });
    }
    lastChecked = this;
  }
}

checkboxes.forEach(box => {
  box.addEventListener('click', handleCheck);
});
