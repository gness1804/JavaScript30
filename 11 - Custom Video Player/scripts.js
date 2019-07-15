const player = document.querySelector('.player');
const progressBarFilledPortion = player.querySelector('.progress__filled');
const playOrPauseButton = player.querySelector('.player__button.toggle');
const sliders = document.querySelectorAll('.player__slider');
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
function handleVideoUpdate() {
  const { currentTime, duration: totalTime } = this;
  const progressElapsed = Math.round((currentTime / totalTime) * 100);
  progressBarFilledPortion.style.width = `${progressElapsed.toString()}%`;
  progressBarFilledPortion.style.flexBasis = `${progressElapsed.toString()}%`;
}

playOrPauseButton.addEventListener('click', handlePlayPause);

skipButtons.forEach(button => button.addEventListener('click', handleSkip));
sliders.forEach(slider => slider.addEventListener('change', handleSliderChange));

video.addEventListener('click', handlePlayPause);
video.addEventListener('dblclick', resetVideo);
video.addEventListener('play', updateButtonDisplay);
video.addEventListener('pause', updateButtonDisplay);
video.addEventListener('timeupdate', handleVideoUpdate);
