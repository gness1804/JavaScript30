let lastKeyupTime;
let targetStr = '';

const handleKeyup = (e) => {
  const startNewSequence = () => {
    const keyPressed = e.key;
    targetStr = keyPressed;
    lastKeyupTime = Date.now();
  };

  const addKeyToSequence = () => {
    const keyPressed = e.key;
    targetStr += keyPressed;
    lastKeyupTime = Date.now();
  };

  if (targetStr === 'cats') {
    targetStr = '';
    alert('Congratulations! You win!');
    return;
  }

  if (lastKeyupTime) {
    const timeElapsed = Date.now() - lastKeyupTime;
    if (timeElapsed > 3000) {
      // start a new sequence if the lag between presses is more than 3 seconds
      startNewSequence();
      return;
    }
    // else, add this key to the string of keys pressed in a row
    addKeyToSequence();
    return;
  }
  // start a new sequence since this is the first key pressed
  startNewSequence();
};

window.addEventListener('keyup', handleKeyup);
