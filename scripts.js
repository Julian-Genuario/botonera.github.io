var pulsaciones = {};
var audioActual; 

function playAudio(audioSrc, btnId) {

  if (audioActual) {
    audioActual.pause();
    audioActual.currentTime = 0; 
  }

  var audio = new Audio(audioSrc);
  audio.play();
  audioActual = audio; 


  if (pulsaciones[btnId]) {
    pulsaciones[btnId]++;
  } else {
    pulsaciones[btnId] = 1;
  }

  
  var originalText = document.getElementById('btn' + btnId).getAttribute('data-original-text');


  document.getElementById('btn' + btnId).innerText = originalText + ' - Pulsaciones: ' + pulsaciones[btnId];

  setTimeout(function () {
    document.getElementById('btn' + btnId).innerText = originalText;
  }, 2000); 
}
