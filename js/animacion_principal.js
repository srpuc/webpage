var scroll = 0;
var totalScroll = 0;

const frameCount = 120;
let frameIndex = 0;

let imagenes = [];

//precarga de imagenes
const preloadImages = () => {
  for (let i = 0; i <= frameCount; i++) 
  {
      imagenes[i] = new Image();
      imagenes[i].src = "images/animations/" + i.toString().padStart(4,'0'); + ".png";
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

//cambiar imagen
function update_image() {
  var img_name = "images/animations/" + frameIndex + ".png";
  document.getElementById("animation_image").src = img_name;
}

//funcion llamada por el event listener
function scroll_function() {

  const scrollFraction = document.getElementById("container").scrollTop / (document.getElementById("animation_lenght").clientHeight - document.getElementById("container").clientHeight);
  
  const index = Math.min( frameCount , Math.ceil( scrollFraction * frameCount ) );
  frameIndex = index.toString().padStart(4,'0');

  const fadeFraction = -2 * scrollFraction + 1;
  document.getElementById("animation_text").style.opacity = fadeFraction;

  update_image();

}

//funcion que continua el la animacion con el scroll principal
function continuar_scroll() {

  const wholeFraction = ( document.documentElement.scrollTop - document.documentElement.clientTop ) / document.documentElement.clientHeight ;

  const fadeAnimation = ( -2 * wholeFraction ) + 1;
  document.getElementById( "container" ).style.opacity = fadeAnimation;

  const fadeText = ( 4 * wholeFraction ) - 3 ;
  document.getElementById("footer_text").style.opacity = fadeText;
  

}

//event listener para el container de la animacion
document.getElementById("container").addEventListener( "scroll", scroll_function );
window.addEventListener( "scroll", continuar_scroll );

addLoadEvent(preloadImages);

preloadImages()