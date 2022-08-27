const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('play', function (currentTime) {
  console.log('played the video!', currentTime.seconds);

  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const timeSaved = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(timeSaved)
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

throttle(player.setCurrentTime, 1000);
