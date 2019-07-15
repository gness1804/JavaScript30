const player = document.querySelector('.player');
const progressBar = player.querySelector('.progress');
const progressBarFilledPortion = player.querySelector('.progress__filled');
const playOrPauseButton = player.querySelector('.player__button.toggle');
const sliders = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');
const video = player.querySelector('.player__video.viewer');

let mousedown = false;

/** toggles between play and pause
 * @returns {Function} - video.play() or video.pause() depending on video's current state
 */
const handlePlayPause = () => video[video.paused ? 'play' : 'pause']();

function updateButtonDisplay() {
  const playIcon = '►';
  const pauseIcon = '❚ ❚';
  playOrPauseButton.innerText = this.paused ? playIcon : pauseIcon;
}

function handleSliderChange() {
  const newVal = parseFloat(this.value);
  const type = this.name;
  video[type] = newVal;
}

function handleSkip() {
  const skipVal = parseFloat(this.dataset.skip);
  video.currentTime += skipVal;
}

const resetVideo = () => { video.currentTime = 0; };

/**
 * updates the progress base based on how far the video has advanced
 */
function handleTimeVideoUpdate() {
  const { currentTime, duration: totalTime } = this;
  const progressElapsed = (currentTime / totalTime) * 100;
  progressBarFilledPortion.style.width = `${progressElapsed.toString()}%`;
  progressBarFilledPortion.style.flexBasis = `${progressElapsed.toString()}%`;
}

function handleClickVideoUpdate(e) {
  if (e.type === 'mousemove' && !mousedown) return;
  const placeClicked = e.offsetX;
  const progressBarWidth = progressBar.offsetWidth;
  const timeToJumpTo = (placeClicked / progressBarWidth) * video.duration;
  video.currentTime = timeToJumpTo;
}

const handleMousedown = () => { mousedown = true; };
const handleMouseup = () => { mousedown = false; };

playOrPauseButton.addEventListener('click', handlePlayPause);
progressBar.addEventListener('click', handleClickVideoUpdate);
progressBar.addEventListener('mousemove', handleClickVideoUpdate);
progressBar.addEventListener('mousedown', handleMousedown);
progressBar.addEventListener('mouseup', handleMouseup);

skipButtons.forEach(button => button.addEventListener('click', handleSkip));
sliders.forEach(slider => slider.addEventListener('change', handleSliderChange));

video.addEventListener('click', handlePlayPause);
video.addEventListener('dblclick', resetVideo);
video.addEventListener('play', updateButtonDisplay);
video.addEventListener('pause', updateButtonDisplay);
video.addEventListener('timeupdate', handleTimeVideoUpdate);
