var video = document.querySelector('#video');
var audio = document.querySelector('#audio');
var playButton = document.querySelector('#play-button');
var isPlaying = false;

var toggleState = function() {
  if(isPlaying) {
    video.pause();
    audio.pause();
    playButton.innerHTML = 'Play'
  } else {
    video.play();
    audio.play();
    playButton.innerHTML = 'Pause';
  }
  isPlaying = !isPlaying;
};

playButton.addEventListener('click', function() {
  toggleState();
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/catnap/sw.js')
    .then(function(reg) {
      console.log('Service Worker Registration succeeded: ' + JSON.stringify(reg));
    })
    .catch(function(error) {
      console.log('Service Worker Registration failed with: ' + error);
    })
}
