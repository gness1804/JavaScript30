const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const paintToCanvas = () => {
  const { videoWidth: width } = video;
  const { videoHeight: height } = video;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
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
