window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// eslint-disable-next-line no-undef
const recognition = new SpeechRecognition();
recognition.interimResults = true;

const handleResult = e => {
  const transcript = Array.from(e.results)
    .map(res => res[0])
    .map(res => res.transcript)
    .join(' ');
};

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', handleResult);

recognition.start();
