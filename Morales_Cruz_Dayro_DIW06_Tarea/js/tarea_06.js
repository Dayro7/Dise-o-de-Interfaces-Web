// aseguramos que el DOM esté completamente cargado
$(document).ready(function () {
    let contador = 1; //variable global para la gestion del historial
    // función de inicialización (vista de los paneles)
    function inicializar() {
        // valores iniciales
        // añadimos el estado 'checked' a nuestras 'sections'
        $("#chkImagen").prop("checked", true);
        $("#chkTexto").prop("checked", true);
        // icono por defecto
        $("#avatar").attr("src", "./img/logo.jpg").css();

        // IMAGEN-------------------------------------------------------------------
        // mostramos las 'sections'
        $("#zonaImagen").show();
        $("#zonaTexto").show();
        // reseteamos el src de las imágenes
        $(".imagenGrande").attr("src", "./img/ies.png");

        // TEXTO-------------------------------------------------------------------
        // restauramos texto del botón 'ocultar/mostrar con efecto'
        $("#mostrarOcultar").text("Mostrar/Ocultar con Efecto");
        // velocidad por defecto
        $("#velocidad").val("2000");
        // separación texto por defecto
        $("#separacion").val("0");
        // fuente por defecto
        $("#fuente").val("Arial");
        // historial
        $("#acciones").html("");
        contador = 1;
    }

    // llamamos a la función de inicialización al cargar la página
    $(document).ready(function () {
        inicializar();
    });


    // -------------- Script para barra de animación del logo --------------

    $(document).ready(function () {
        $("#avatar").click(function () {
            $(this).fadeOut(1000, function () {
                $(this).css({ "display": "none" });
                var logoCentro = $("#logoCentro");
                logoCentro.fadeIn(1000);
                logoCentro.hide();
                logoCentro.css({ "width": "150px", "height": "150px", "display": "block" });
            });
        });
    });


    // -------------- Script para barra de navegación --------------

    $(document).ready(function () {
        // Variables para guardar los valores iniciales
        var valoresIniciales = {};

        // Función para inicializar la página
        function inicializar() {
            // Restablece los valores a los valores iniciales guardados
            Object.keys(valoresIniciales).forEach(function (selector) {
                $(selector).prop('checked', valoresIniciales[selector].checked);
                if (valoresIniciales[selector].checked) {
                    $(valoresIniciales[selector].target).slideDown();
                } else {
                    $(valoresIniciales[selector].target).slideUp();
                }
            });
        }

        // Guardar los valores iniciales
        valoresIniciales["#chkImagen"] = {
            checked: true,
            target: "#zonaImagen"
        };
        valoresIniciales["#chkTexto"] = {
            checked: true,
            target: "#zonaTexto"
        };

        // Llamamos a la función inicializar al cargar la página
        inicializar();


        // -------------- Script para las casillas de las partes de imagen y texto --------------

        // Evento de clic para la casilla de verificación de la zona de imagen
        $("#chkImagen").click(function () {
            if ($(this).is(":checked")) {
                $("#zonaImagen").slideDown();
            } else {
                $("#zonaImagen").slideUp();
            }
        });

        // Evento de clic para la casilla de verificación de la zona de texto
        $("#chkTexto").click(function () {
            if ($(this).is(":checked")) {
                $("#zonaTexto").fadeIn();
            } else {
                $("#zonaTexto").fadeOut();
            }
        });

        // Evento de clic para el botón de inicialización
        $("#btnInicializar").click(function () {
            inicializar();
        });
    });



    // -------------- Script Para la zona de imagen --------------

    $(document).ready(function () {
        // Selecciona todas las miniaturas
        let miniaturas = $('.miniatura');
        // Actualiza la imagen grande con la imagen de la miniatura seleccionada
        let imagenGrande = $('.imagenGrande');
        // Oculta el origen de las imágenes cada vez que se modifica una imagen
        imagenGrande.click(function () {
            // Oculta el origen de las imágenes cuando se hace clic en la imagen grande
            $('#origenes').hide();
        });

        // Añade un evento de click a la imagen grande
        imagenGrande.click(function () {
            // Oculta el origen de las imágenes cuando se hace clic en la imagen grande
            $('#origenes').hide();

            // Aplica el filtro seleccionado a la imagen grande
            let filtro = $('#filtro').val();
            let filtros = {
                'blur': 'blur(5px)',
                'brightness': 'brightness(150%)',
                'contrast': 'contrast(150%)',
                'grayscale': 'grayscale(100%)',
                'none': 'none'
            };
            imagenGrande.css('filter', filtros[filtro]);

            // Aplica el grosor del borde y el color al contenedor de la imagen
            let grosorBorde = $('#grosorBorde').val();
            let colorBorde = $('#colorBorde').val();
            imagenGrande.css('border', `${grosorBorde}px solid ${colorBorde}`);
        });

        // Añade un evento de click a cada miniatura
        miniaturas.each(function (index, miniatura) {
            $(miniatura).click(function () {
                // Aplica el estilo a la miniatura seleccionada
                // Remueve el estilo de las otras miniaturas
                miniaturas.each(function (i, mini) {
                    if (i === index) {
                        $(mini).addClass('seleccionada');
                    } else {
                        $(mini).removeClass('seleccionada');
                    }
                });
                imagenGrande.attr('src', $(miniatura).attr('src'));
            });
        });

        // Añade un evento de click al botón para mostrar el origen de las imágenes
        $('#btnVerOrigen').click(function () {
            let origenes = $('#origenes');
            // Vaciar el contenido actual del contenedor antes de agregar nuevos datos
            origenes.empty();
            miniaturas.each(function (index, miniatura) {
                origenes.append(`<p><strong>Imagen ${index + 1}:</strong> Tiene como origen: ${$(miniatura).attr('src')}</p>`);
            });
            origenes.show();
        });

        // Añade un evento de cambio a los botones de radio de orientación
        $('input[name="orientacion"]').change(function () {
            let orientacion = $(this).val();
            if (orientacion === 'horizontal') {
                $('#collage').css('flex-direction', 'row');
            } else {
                $('#collage').css('flex-direction', 'column');
            }
        });

        // Añade un evento de cambio al selector de color de fondo
        $('#colorFondo').change(function () {
            let colorFondo = $(this).val();
            $('#collage').css('background-color', colorFondo);
        });
    });


    // -------------- Script Para la zona de texto --------------

    $('#mostrarOcultar').click(function () {
        var titulos = $('.titulo');
        var velocidad = parseInt($('#velocidad').val());
        // Si el primer título está visible, lo oculta y muestra el segundo título
        if (titulos.eq(0).is(':visible')) {
            titulos.eq(0).fadeOut(velocidad, function () {
                titulos.eq(1).fadeIn(velocidad);
            });
        } else { // Si el segundo título está visible, lo oculta y muestra el primer título
            titulos.eq(1).fadeOut(velocidad, function () {
                titulos.eq(0).fadeIn(velocidad);
            });
        }
        // ocultamos el botón después de pulsarlo
        $(this).hide();
        // ocultamos el campo de velocidad después de pulsar el botón
        $('#velocidad').hide();
        $('label[for="velocidad"]').hide();
        agregarAccion('Cambio de título');
    });

    $('#separacion').change(function () {
        var titulos = $('.titulo');
        titulos.css('letter-spacing', $(this).val() + 'px');
        agregarAccion('Cambio de separación');
    });

    $('#fuente').change(function () {
        var titulos = $('.titulo');
        titulos.css('font-family', $(this).val());
        agregarAccion('Cambio de fuente');
    });

    function agregarAccion(accion) {
        var li = $('<li>').text(($('#acciones').children().length + 1) + ': ' + accion);
        $('#acciones').prepend(li);
    }


    // -------------- Script para el pié de página --------------

    // Añade la información de las imágenes al pie de página
    $('#autor').append('Dayro Morales Cruz');
    $('#origen').append('Realizadas por IA');
    $('#licencia').append('Licencia libre ');

    // Añade los filtros seleccionados al pie de página
    $('#filtros').append('<li>Desenfoque</li>');
    $('#filtros').append('<li>Brillo</li>');
    $('#filtros').append('<li>Contraste</li>');
    $('#filtros').append('<li>Escala de grises</li>');

    // Añade las fuentes utilizadas al pie de página
    $('#fuentes').append('<li>Work Sans</li>');
});
