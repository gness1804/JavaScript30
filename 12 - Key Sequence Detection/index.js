/* global cornify_add */
let lastKeyupTime;
let targetStr = '';

const secretCode = 'cats';

const handleKeyup = (e) => {
  const startNewSequence = () => {
    targetStr = e.key;
    lastKeyupTime = Date.now();
  };

  const checkIfStringMatches = () => {
    if (targetStr.includes(secretCode)) {
      targetStr = '';
      cornify_add();
    }
  };

  const addKeyToSequence = () => {
    targetStr += e.key;
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
