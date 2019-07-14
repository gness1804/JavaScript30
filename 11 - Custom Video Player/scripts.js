const player = document.querySelector('.player');
// const progressBar = player.querySelector('.progress');
const playOrPauseButton = player.querySelector('.player__button.toggle');
const volumeSlider = player.querySelector('.player__slider.volume');
const playbackRateSlider = player.querySelector('.player__slider.playback-rate');
const rewindButton = player.querySelector('.player__button.rewind');
const fastForwardButton = player.querySelector('.player__button.fast-forward');
const video = player.querySelector('.player__video.viewer');

const handlePlayPause = () => {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
};

function handleVolumeChange() {
  const newVol = this.value;
  video.volume = newVol;
}

function handlePlaybackRateChange() {
  const newRate = this.value;
  video.playbackRate = newRate;
}

function handleFastForward() {
  const skipVal = parseFloat(this.dataset.skip);
  video.currentTime += skipVal;
}

function handleRewind() {
  const skipVal = parseFloat(this.dataset.skip);
  video.currentTime += skipVal;
}

playOrPauseButton.addEventListener('click', handlePlayPause);
volumeSlider.addEventListener('change', handleVolumeChange);
playbackRateSlider.addEventListener('change', handlePlaybackRateChange);
fastForwardButton.addEventListener('click', handleFastForward);
rewindButton.addEventListener('click', handleRewind);
video.addEventListener('click', handlePlayPause);
