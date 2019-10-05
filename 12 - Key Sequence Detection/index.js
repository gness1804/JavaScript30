/* global cornify_add */

let targetStr = '';
const secretCode = 'cats';

const handleKeyup = e => {
  targetStr += e.key;
  if (targetStr.length > 4) {
    targetStr = targetStr.slice(1);
  }
  if (targetStr === secretCode) {
    targetStr = '';
    cornify_add();
  }
};

window.addEventListener('keyup', handleKeyup);
