var pulsaciones = {};
var audioActual; // Variable global para mantener la referencia al audio actual

function playAudio(audioSrc, btnId) {
  // Detener la reproducción del audio actual, si existe
  if (audioActual) {
    audioActual.pause();
    audioActual.currentTime = 0; // Reinicia el tiempo de reproducción al inicio
  }

  var audio = new Audio(audioSrc);
  audio.play();
  audioActual = audio; // Asigna el nuevo audio como el audio actual

  // Verificar si el botón ya ha sido presionado
  if (pulsaciones[btnId]) {
    pulsaciones[btnId]++;
  } else {
    pulsaciones[btnId] = 1;
  }

  // Obtener el texto original del botón
  var originalText = document.getElementById('btn' + btnId).getAttribute('data-original-text');

  // Actualizar el texto del botón con el número de pulsaciones
  document.getElementById('btn' + btnId).innerText = originalText + ' - Pulsaciones: ' + pulsaciones[btnId];

  // Restaurar el texto original después de un tiempo (por ejemplo, 2 segundos)
  setTimeout(function () {
    document.getElementById('btn' + btnId).innerText = originalText;
  }, 2000); // 2000 milisegundos = 2 segundos
}
