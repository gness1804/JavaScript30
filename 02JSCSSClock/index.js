const startStopButton = document.querySelector('.start-stop-button');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let intervalId = null;

const tickUpOneSecond = () => {
  const second = new Date().getSeconds();
  const degrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${degrees}deg)`;
};

const tickUpOneMinute = () => {
  const minute = new Date().getMinutes();
  const degrees = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${degrees}deg)`;
};

const tickUpOneHour = () => {
  let hour = new Date().getHours();
  if (hour >= 13) {
    hour -= 12;
  }
  const degrees = hour * 30 + 90;
  hourHand.style.transform = `rotate(${degrees}deg)`;
};

const goUpOneTick = () => {
  tickUpOneSecond();
  tickUpOneMinute();
  tickUpOneHour();
};

const startProcess = () => {
  intervalId = window.setInterval(goUpOneTick, 1000);
  startStopButton.innerHTML = 'Stop';
};

const stopProcess = () => {
  window.clearInterval(intervalId);
  intervalId = null;
  startStopButton.innerHTML = 'Start';
};

startStopButton.addEventListener('click', () => {
  if (intervalId) {
    stopProcess();
  } else {
    startProcess();
  }
});

startProcess();
