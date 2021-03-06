const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// eslint-disable-next-line no-unused-vars
const redEffect = pixels => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // yellow
  }
  return pixels;
};

// eslint-disable-next-line no-unused-vars
const rgbSplit = pixels => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] + 100; // red
    pixels.data[i + 100] = pixels.data[i + 1] - 50; // green
    pixels.data[i - 150] = pixels.data[i + 2] * 0.5; // yellow
  }
  return pixels;
};

// could not get this to work
const greenScreen = pixels => {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach(input => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.data.length; i += 4) {
    const red = pixels.data[i + 0];
    const green = pixels.data[i + 1];
    const blue = pixels.data[i + 2];
    // const alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
};

const paintToCanvas = () => {
  const { videoWidth: width } = video;
  const { videoHeight: height } = video;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
};

// disabled because html file is calling this fn
// eslint-disable-next-line no-unused-vars
const takePhoto = () => {
  // plays a sound
  snap.currentTime = 0;
  snap.play();

  // creates a link with the photo to download
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome guy." />`;
  strip.insertBefore(link, strip.firstChild);
};

const getVideo = () => {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then(stream => {
      video.srcObject = stream;
      video.play();
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(`Video stream failed: ${err}`);
    });
};

getVideo();

video.addEventListener('canplay', paintToCanvas);
