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

if (timeSaved) {
  player.setCurrentTime(timeSaved);
}

throttle(player.setCurrentTime, 1000);
