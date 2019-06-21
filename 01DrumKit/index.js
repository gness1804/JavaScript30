document.addEventListener('keyup', (e) => {
  const keyPressed = e.which;
  document.querySelectorAll('.key').forEach(item => {
    if (parseInt(item.dataset.key, 10) === keyPressed) {
      item.classList.add('playing');
      setTimeout(() => {
        item.classList.remove('playing');
      }, 3000);
    }
  });
});
