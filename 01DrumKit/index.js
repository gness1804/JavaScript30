const playSound = async (item) => {
  try {
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
  setTimeout(() => {
    keyElem.classList.remove('playing');
  }, 3000);
});
