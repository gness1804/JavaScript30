const playSound = async (item) => {
  try {
    await item.play();
  } catch (error) {
    throw new Error(`Problem playing sound: ${error}`);
  }
};

document.addEventListener('keyup', (e) => {
  const keyPressed = e.which;

  document.querySelectorAll('audio').forEach(item => {
    if (parseInt(item.dataset.key, 10) === keyPressed) {
      playSound(item);
    }
  });

  document.querySelectorAll('.key').forEach(item => {
    if (parseInt(item.dataset.key, 10) === keyPressed) {
      item.classList.add('playing');
      setTimeout(() => {
        item.classList.remove('playing');
      }, 3000);
    }
  });
});
