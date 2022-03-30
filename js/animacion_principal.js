
// DECLARACION DE VARIABLES
// ------------------------
const frameCount = 120;
let frameIndex = 0;
let imagenes = [];


// FUNCIONES: PRECARGA DE IMAGENES
// -------------------------------
const preloadImages = () => {
  for (let i = 0; i <= frameCount; i++) 
  {
      imagenes[i] = new Image();
      imagenes[i].src = "images/animations/" + i.toString().padStart(4,'0') + ".png";
      imagenes[i].id = "animation_image";
      imagenes[i].alt = "animation_image";
  }
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

// FUNCION: SUSTITUR IMAGEN
// ------------------------
function update_image() {
  document.getElementById("animation_image").replaceWith( imagenes[frameIndex] );
}


// FUNCION: ANIMACION PRINCIPAL VINCULADA AL SCROLL
// ------------------------------------------------
function scroll_animacion() {

  const scrollFraction = document.getElementById("container").scrollTop / (document.getElementById("animation_lenght").clientHeight - document.getElementById("container").clientHeight);
  
  frameIndex = Math.min( frameCount , Math.ceil( scrollFraction * frameCount ) );
  

  const fadeFraction = -2 * scrollFraction + 1;
  document.getElementById("animation_text").style.opacity = fadeFraction;

  update_image();

}


// FUNCION: ANIMACION TEXTO VINCULADA AL SCROLL
// --------------------------------------------
function scroll_section() {

  const wholeFraction = ( document.getElementById("section").scrollTop - document.getElementById("section").clientTop ) / document.getElementById("section").clientHeight ;

  const fadeAnimation = ( -2 * wholeFraction ) + 1;
  document.getElementById( "container" ).style.opacity = fadeAnimation;

  const fadeText = ( 4 * wholeFraction ) - 3 ;
  document.getElementById("footer_text").style.opacity = fadeText;
  

}


// AÑADIR EVENTOS
// --------------
document.getElementById("container").addEventListener( "scroll", scroll_animacion );
document.getElementById("section").addEventListener( "scroll", scroll_section );


// PRECARGAR IMAGENES
// ------------------
addLoadEvent(preloadImages);