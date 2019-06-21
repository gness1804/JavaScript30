const stopButton = document.querySelector('.stop-button');
const secondHand = document.querySelector('.second-hand');

const tickUpOneSecond = () => {
  const second = new Date().getSeconds();
  const degrees = ((second / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${degrees}deg)`;
};

const secIntervalId = window.setInterval(tickUpOneSecond, 1000);

stopButton.addEventListener('click', () => {
  window.clearInterval(secIntervalId);
});
