var palabras = ["Estudiante ", "Desarrollador ", "Más "];
contenedorDePalabra = document.getElementById("palabra");
palabraEscrita = contenedorDePalabra.innerHTML;
banderaEscribiendoPalabra = false;
contador = 1;
banderaRelantizar = 4;

setInterval(function () {
	escribirTexto();
	if (banderaRelantizar == 4) {
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
}, 23);

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

//Preloader

window.onload = function () {
	$("footer").removeClass("invisible");
	$("#onload").fadeOut();
	$("body").removeClass("hidden");
};

// efecto scroll
window.addEventListener("scroll", function () {
	let elements = document.getElementsByClassName("scroll-content");
	let screenSize = window.innerHeight;

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		if (element.getBoundingClientRect().top < screenSize) {
			element.classList.add("visible");
		}
	}
});
