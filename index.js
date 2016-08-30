var video = document.querySelector('#video');
var audio = document.querySelector('#audio');
var playButton = document.querySelector('#play-button');
var isPlaying = true;

var toggleState = function() {
  if(isPlaying) {
    video.pause();
    audio.pause();
  } else {
    video.play();
    audio.play();
  }
  isPlaying = !isPlaying;
};

playButton.addEventListener('click', function() {
  toggleState();
})
