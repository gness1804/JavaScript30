const times = [];

const videos = document.querySelectorAll('.videos li');

videos.forEach(time => times.push(time.dataset.time));
