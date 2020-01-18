window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// eslint-disable-next-line no-undef
const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

const handleResult = e => {
  const transcript = Array.from(e.results)
    .map(res => res[0])
    .map(res => res.transcript)
    .join(' ');

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
};

recognition.addEventListener('result', handleResult);
recognition.addEventListener('end', recognition.start);

recognition.start();
