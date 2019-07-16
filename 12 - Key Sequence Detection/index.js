let lastKeyupTime;
let targetStr = '';

const secretCode = 'cats';

const handleKeyup = (e) => {
  const startNewSequence = () => {
    const keyPressed = e.key;
    targetStr = keyPressed;
    lastKeyupTime = Date.now();
  };

  const checkIfStringMatches = () => {
    if (targetStr.includes(secretCode)) {
      targetStr = '';
      alert('Congratulations! You win!');
    }
  };

  const addKeyToSequence = () => {
    const keyPressed = e.key;
    targetStr += keyPressed;
    lastKeyupTime = Date.now();
    checkIfStringMatches();
  };

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
