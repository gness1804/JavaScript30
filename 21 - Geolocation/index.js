const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

const onSuccess = data => {
  speed.textContent = data.coords.speed || 0;
  if (data.coords.heading) {
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }
};

const onFailure = err => {
  throw new Error(`Error: something went wrong! ${err.message}`);
};

navigator.geolocation.watchPosition(onSuccess, onFailure);
