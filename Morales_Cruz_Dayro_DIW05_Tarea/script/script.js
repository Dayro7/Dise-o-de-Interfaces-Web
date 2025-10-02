// Script para el ejercicio 3

function pausarAnimaciones() {
    document.getElementById('carga').style.animationPlayState = 'paused';
    document.getElementById('texto_1').style.animationPlayState = 'paused'; // Pausamos la animación del texto
}

function reanudarAnimaciones() {
    document.getElementById('carga').style.animationPlayState = 'running';
    document.getElementById('texto_1').style.animationPlayState = 'running'; // Reanudamos la animación del texto
}

window.onload = function () {
    document.getElementById('bateria').addEventListener('animationend', function () {
        document.getElementById('polo').style.backgroundColor = 'red'; // Cambiamos el color del polo a verde
        document.getElementById('polo').style.color = 'white';

    });
}

// Script para la animación CANVAS del ejercicio 4

var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext('2d');
var progress = 0;

// Dibuja la batería
function drawBattery() {
    ctx.clearRect(10, 10, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.fillRect(20, 20, 110, 260);
    ctx.clearRect(30, 30, 90, 240);

    // Dibuja la parte superior de la batería
    ctx.fillStyle = 'red';
    ctx.lineWidth = 1;
    ctx.fillRect(55, 2, 40, 18);
    if (progress >= 240) {
        ctx.fillStyle = 'blue'; // Cambia el color a verde cuando la batería está cargada
    } else {
        ctx.fillStyle = '#e2dfb5';
    }
    ctx.fillRect(59, 5, 32, 15);
}

// Dibuja la carga de la batería
function drawCharge() {
    ctx.fillStyle = 'green';
    ctx.fillRect(30, 270 - progress, 90, progress);
}

// Inicia la animación
function startAnimation() {
    drawBattery();
    progress = 0;
    var id = setInterval(frame, 20);
    function frame() {
        if (progress >= 240) {
            clearInterval(id);
            document.getElementById('message').innerHTML = '¡Completado!';
        } else {
            progress++;
            drawBattery();
            drawCharge();
        }
    }
}
drawBattery();


// Script para la animación SVG del ejercicio 5

// Función para iniciar la animación de la letra D al hacer clic
    document.querySelector("#D").addEventListener("click", function () {
        // Animación de la letra D
        document.querySelector("#path1").animate([
            { strokeDashoffset: 1000 },
            { strokeDashoffset: 0 }
        ], {
            duration: 2000,
            iterations: 1,
            fill: 'forwards' // Para que la línea se mantenga después de la animación
        });

        // Animación de la letra D
        document.querySelector("#D").animate([
            { startOffset: '0%' },
            { startOffset: '100%' }
        ], {
            duration: 2000,
            iterations: 1,
            fill: 'forwards' // Para que la letra se mantenga después de la animación
        });

        // Después de la animación de D, iniciar la animación de M después de 4 segundos
        setTimeout(function () {
            document.querySelector("#path2").animate([
                { strokeDashoffset: 1000 },
                { strokeDashoffset: 0 }
            ], {
                duration: 2000,
                iterations: 1,
                fill: 'forwards' // Para que la línea se mantenga después de la animación
            });

            // Después de la animación de D, iniciar la animación de M después de 4 segundos
            document.querySelector("#M").animate([
                { startOffset: '0%' },
                { startOffset: '100%' }
            ], {
                duration: 2000,
                iterations: 1,
                fill: 'forwards' // Para que la letra se mantenga después de la animación
            });
        }, 4000); // Esperar 4 segundos después de iniciar la animación de D para iniciar la de M
    });

    // Iniciar la animación de la letra C automáticamente al cargar la página
    document.addEventListener("DOMContentLoaded", function () {
        // Animación de la letra C
        document.querySelector("#path3").animate([
            { strokeDashoffset: 1000 },
            { strokeDashoffset: 0 }
        ], {
            duration: 2000,
            iterations: 3,
            fill: 'forwards' // Para que la línea se mantenga después de la animación
        });

        // Animación de la letra C
        document.querySelector("#C").animate([
            { startOffset: '0%' },
            { startOffset: '100%' }
        ], {
            duration: 2000,
            iterations: 3,
            fill: 'forwards' // Para que la letra se mantenga después de la animación
        });
    });