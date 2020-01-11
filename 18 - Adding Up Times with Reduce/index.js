const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

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
  timeNodes
    .reduce((acc, curr) => {
      acc.push(curr.dataset.time);
      return acc;
    }, [])
    .reduce((acc, curr) => {
      const [mins, seconds] = curr.split(':').map(parseFloat);
      const totalSeconds = mins * 60 + seconds;

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
