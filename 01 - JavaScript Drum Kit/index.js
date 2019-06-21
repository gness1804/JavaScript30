document.addEventListener('keyup', (e) => {
  const keyPressed = event.which;
  document.querySelectorAll('.key').forEach(item => {
    if (parseInt(item.dataset.key, 10) === keyPressed) {
      item.classList.add('playing');
    }
  })
});
