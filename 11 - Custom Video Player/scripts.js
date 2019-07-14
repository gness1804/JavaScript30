const player = document.querySelector('.player');
// const progressBar = player.querySelector('.progress');
const playOrPauseButton = player.querySelector('.player__button.toggle');
const volumeSlider = player.querySelector('.player__slider.volume');
const playbackRateSlider = player.querySelector('.player__slider.playback-rate');
const skipButtons = document.querySelectorAll('[data-skip]');
const video = player.querySelector('.player__video.viewer');

/** toggles between play and pause
 * @returns {Function} - video.play() or video.pause() depending on video's current state
 */
const handlePlayPause = () => video[video.paused ? 'play' : 'pause']();

function updateButtonDisplay() {
  const playIcon = '►';
  const pauseIcon = '❚ ❚';
  playOrPauseButton.innerText = this.paused ? playIcon : pauseIcon;
}

function handleVolumeChange() {
  const newVol = this.value;
  video.volume = newVol;
}

function handlePlaybackRateChange() {
  const newRate = this.value;
  video.playbackRate = newRate;
}

function handleSkip() {
  const skipVal = parseFloat(this.dataset.skip);
  video.currentTime += skipVal;
}

const resetVideo = () => { video.currentTime = 0; };

playOrPauseButton.addEventListener('click', handlePlayPause);
volumeSlider.addEventListener('change', handleVolumeChange);
playbackRateSlider.addEventListener('change', handlePlaybackRateChange);

skipButtons.forEach(button => button.addEventListener('click', handleSkip));

video.addEventListener('click', handlePlayPause);
video.addEventListener('dblclick', resetVideo);
video.addEventListener('play', updateButtonDisplay);
video.addEventListener('pause', updateButtonDisplay);
