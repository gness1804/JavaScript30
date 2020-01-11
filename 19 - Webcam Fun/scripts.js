const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const getVideo = () => {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then(stream => {
      video.srcObject = stream;
      video.play();
    });
};

getVideo();
