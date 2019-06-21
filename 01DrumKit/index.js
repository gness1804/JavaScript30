const playSound = async (item) => {
  try {
    item.currentTime = 0;
    await item.play();
  } catch (error) {
    throw new Error(`Problem playing sound: ${error}`);
  }
};

document.addEventListener('keydown', (e) => {
  const keyPressed = e.which;

  const audioElem = document.querySelector(`audio[data-key="${keyPressed}"]`);
  if (!audioElem) {
    return;
  }
  playSound(audioElem);
  const keyElem = document.querySelector(`.key[data-key="${keyPressed}"]`);
  keyElem.classList.add('playing');

  document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('transitionend', () => {
      item.classList.remove('playing');
    });
  });
});
