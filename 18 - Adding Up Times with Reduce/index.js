const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const convertRawSecToTimeDisplay = secs => {
  const hours = Math.floor(secs / 3600);
  const leftOverSeconds = secs % 3600;
  const minutes = Math.floor(leftOverSeconds / 60);
  const seconds = leftOverSeconds % 60;

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
  throw new Error('Error with convertRawSecToTimeDisplay call for 3662 secs');
}

if (convertRawSecToTimeDisplay(42) !== '0:0:42') {
  throw new Error('Error with convertRawSecToTimeDisplay call for 42 secs');
}

if (convertRawSecToTimeDisplay(312) !== '0:5:12') {
  throw new Error('Error with convertRawSecToTimeDisplay call for 312 secs');
}

if (convertRawSecToTimeDisplay(6732) !== '1:52:12') {
  throw new Error('Error with convertRawSecToTimeDisplay call for 6732 secs');
}

if (convertRawSecToTimeDisplay(1734) !== '0:28:54') {
  throw new Error('Error with convertRawSecToTimeDisplay call');
}
