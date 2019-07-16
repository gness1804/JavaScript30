let lastKeyupTime;
let targetStr = '';

const handleKeyup = (e) => {
  if (targetStr === 'cats') {
    targetStr = '';
    alert('Congratulations! You win!');
    return;
  }
  if (lastKeyupTime) {
    const timeElapsed = Date.now() - lastKeyupTime;
    if (timeElapsed > 3000) {
      // start a new sequence if the lag between presses is more than 3 seconds
      const keyPressed = e.key;
      targetStr = keyPressed;
      lastKeyupTime = Date.now();
      return;
    }
    // else, add this key to the string of keys pressed in a row
    const keyPressed = e.key;
    targetStr += keyPressed;
    lastKeyupTime = Date.now();
    return;
  }
  // start a new sequence since this is the first key pressed
  const keyPressed = e.key;
  targetStr = keyPressed;
  lastKeyupTime = Date.now();
};

window.addEventListener('keyup', handleKeyup);
