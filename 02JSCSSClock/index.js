const stopButton = document.querySelector('.stop-button');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');

const tickUpOneSecond = () => {
  const second = new Date().getSeconds();
  const degrees = ((second / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${degrees}deg)`;
};

const tickUpOneMinute = () => {
  const minute = new Date().getMinutes();
  const degrees = ((minute / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${degrees}deg)`;
};

const goUpOneTick = () => {
  tickUpOneSecond();
  tickUpOneMinute();
};

const intervalId = window.setInterval(goUpOneTick, 1000);

stopButton.addEventListener('click', () => {
  window.clearInterval(intervalId);
});
