const times = [];

const videos = document.querySelectorAll('.videos li');

videos.forEach(time => times.push(time.dataset.time));

const convertRawSecToTimeDisplay = secs => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (secs >= 3600) {
    // at least one hour
    hours = Math.floor(secs / 3600);
    const leftoverMinSec = secs % 3600;
    if (leftoverMinSec >= 60) {
      // the leftover is equal to or greater than one minute; need to break into minutes:seconds
      minutes = Math.floor(leftoverMinSec / 60);
      seconds = leftoverMinSec % 60;
    } else {
      // leftover is less than one minute
      seconds = leftoverMinSec;
    }
  } else if (secs >= 60) {
    // the leftover is equal to or greater than one minute; need to break into minutes:seconds
    minutes = Math.floor(secs / 60);
    seconds = secs % 60;
  } else {
    // less than one minute.
    seconds = secs;
  }

  return `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`;
};

const result = convertRawSecToTimeDisplay(
  times.reduce((acc, curr) => {
    const mins = parseInt(curr.match(/^[0-9]{1,2}:/)[0].replace(/:/, ''), 10);
    const minsToSeconds = mins * 60;
    const seconds = parseInt(
      curr.match(/:[0-9]{1,2}$/)[0].replace(/:/, ''),
      10,
    );
    const totalSeconds = minsToSeconds + seconds;

    return acc + totalSeconds;
  }, 0),
);

// eslint-disable-next-line no-console
console.log(`The total time for all the videos is: ${result}`);

// rudimentary tests to make sure the time conversion function is correct
if (convertRawSecToTimeDisplay(3662) !== '1:1:2') {
  throw new Error('Error with convertRawSecToTimeDisplay call');
}

if (convertRawSecToTimeDisplay(42) !== '0:0:42') {
  throw new Error('Error with convertRawSecToTimeDisplay call');
}

if (convertRawSecToTimeDisplay(312) !== '0:5:12') {
  throw new Error('Error with convertRawSecToTimeDisplay call');
}

if (convertRawSecToTimeDisplay(6732) !== '1:52:12') {
  throw new Error('Error with convertRawSecToTimeDisplay call');
}

if (convertRawSecToTimeDisplay(1734) !== '0:28:54') {
  throw new Error('Error with convertRawSecToTimeDisplay call');
}
