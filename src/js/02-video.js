const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('play', function (currentTime) {
  console.log('played the video!', currentTime);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
