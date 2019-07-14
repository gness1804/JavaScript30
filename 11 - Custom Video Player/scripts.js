// const progressBar = document.querySelector('.progress');
const playOrPauseButton = document.querySelector('.player__button.toggle');
const volumeSlider = document.querySelector('.player__slider.volume');
// const playbackRateSlider = document.querySelector('.player__slider.playback-rate');
// const rewindButton = document.querySelector('.player__button.rewind');
// const fastForwardButton = document.querySelector('.player__button.fast-forward');
const video = document.querySelector('.player__video.viewer');

const handlePlayPause = () => {
  if (video.paused) {
    video.play();
    playOrPauseButton.innerText = 'Pause';
  } else {
    video.pause();
    playOrPauseButton.innerText = 'Play';
  }
};

function handleVolumeChange() {
  const newVol = this.value;
  video.volume = newVol;
}

playOrPauseButton.addEventListener('click', handlePlayPause);
volumeSlider.addEventListener('change', handleVolumeChange);
