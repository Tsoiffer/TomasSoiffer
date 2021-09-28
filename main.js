var palabras = ["Estudiante", "Desarrollador", "Mas"];
contenedorDePalabra = document.getElementById("palabra");
palabraEscrita = contenedorDePalabra.innerHTML;
banderaEscribiendoPalabra = false;
contador = 1;
banderaRelantizar = 10;

setInterval(function () {
	escribirTexto();
	if (banderaRelantizar == 10) {
		borrarPalabra();
		escribirPalabra();
		banderaRelantizar = 0;
	} else {
		banderaRelantizar = banderaRelantizar + 1;
	}

	//volverAComenzarBucle
	if (contador == palabras.length) {
		contador = 0;
	}
}, 35);

function borrarPalabra() {
	if (palabraEscrita.length > 0 && !banderaEscribiendoPalabra) {
		var palabraSinUltimoCaracter = palabraEscrita.slice(0, -1);
		contenedorDePalabra.innerHTML = palabraSinUltimoCaracter;
		palabraEscrita = contenedorDePalabra.innerHTML;
	} else {
		banderaEscribiendoPalabra = true;
	}
}

function escribirPalabra() {
	if (banderaEscribiendoPalabra) {
		if (palabraEscrita.length < palabras[contador].length) {
			contenedorDePalabra.innerHTML = palabras[contador].slice(
				0,
				palabraEscrita.length + 1
			);
			palabraEscrita = contenedorDePalabra.innerHTML;
		} else {
			if (contador < palabras.length) {
				contador++;
			}
			banderaEscribiendoPalabra = false;
		}
	}
}
function escribirTexto() {
	if (banderaEscribiendoTexto) {
		if (textoEscrito.length < textoCompleto.length) {
			contenedorDeTexto.innerHTML = textoCompleto.slice(
				0,
				textoEscrito.length + 1
			);
			textoEscrito = contenedorDeTexto.innerHTML;
		} else {
			banderaEscribiendoTexto = false;
		}
	}
}

//Texto de quien soy

contenedorDeTexto = document.getElementById("texto-js");
textoCompleto = contenedorDeTexto.innerHTML;
textoEscrito = "";
banderaEscribiendoTexto = true;

//
