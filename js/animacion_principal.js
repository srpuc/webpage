
// DECLARACION DE VARIABLES
// ------------------------
const frameCount = 120;
var frameIndex = 0;
var imagenes = [];


// FUNCIONES: PRECARGA DE IMAGENES
// -------------------------------
const preloadImages = () => {
  for (let i = 0; i <= frameCount; i++) 
  {
      imagenes[i] = new Image();
      imagenes[i].src = "images/animations/index/" + i.toString().padStart(4,'0') + ".png";
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

  var scrollFraction = document.getElementById("container").scrollTop / (document.getElementById("animation_lenght").clientHeight - document.getElementById("container").clientHeight);
  
  frameIndex = Math.min( frameCount , Math.ceil( scrollFraction * frameCount ) );
  

  var fadeFraction = -2 * scrollFraction + 1;
  document.getElementById("animation_text").style.opacity = fadeFraction;

  update_image();

}


// FUNCION: ANIMACION TEXTO VINCULADA AL SCROLL
// --------------------------------------------
function scroll_section() {

  var wholeFraction = ( document.getElementById("section").scrollTop - document.getElementById("section").clientTop ) / document.getElementById("section").clientHeight ;

  var fadeAnimation = ( -2 * wholeFraction ) + 1;
  document.getElementById( "container" ).style.opacity = fadeAnimation;

  var fadeText = ( 4 * wholeFraction ) - 3 ;
  document.getElementById("footer_text").style.opacity = fadeText;
  

}


// AÑADIR EVENTOS
// --------------
document.getElementById("container").addEventListener( "scroll", scroll_animacion );
document.getElementById("section").addEventListener( "scroll", scroll_section );


// PRECARGAR IMAGENES
// ------------------
addLoadEvent(preloadImages);