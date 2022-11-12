let images = document.querySelectorAll('.image-icon');
let audio = document.querySelectorAll('.audio-icon');

function hideAudio(){
  audio.forEach(function(el){
    el.style.display = 'none';
  });
}

function pauseMusic(){
let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
}

hideAudio();

images.forEach(function(el) {
  el.onclick = (e) => {
    hideAudio();

    switch (e.target.getAttribute('id')) {


      case 'x&y':
      pauseMusic();
      document.querySelector('#fixYou')
      .style.display = 'block';
      break;

      case 'ghoststories':
      pauseMusic();

      document.querySelector('#skyFullOfStars')
      .style.display = 'block';
      break;

      case 'parachutes':
      pauseMusic();

      document.querySelector('#yellow')
      .style.display = 'block';
      break;

      case 'vivalavidaalbum':
      pauseMusic();

      document.querySelector('#vivaLaVida')
      .style.display = 'block';
      break;
    }
  }
});
