const reproductor = document.getElementById("reproductor");

document.getElementById("subir").addEventListener("click", function () {
  if (reproductor.volume < 1) {
    reproductor.volume += 0.1;
  }
});

document.getElementById("bajar").addEventListener("click", function () {
  if (reproductor.volume > 0) {
    reproductor.volume -= 0.1;
  }
});

document.getElementById("reproducir").addEventListener("click", function () {
  reproductor.play();
});

document.getElementById("pausar").addEventListener("click", function () {
  reproductor.pause();
});
