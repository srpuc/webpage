var scroll = 0;
var totalScroll = 0;

const frameCount = 120;
let frameIndex = 0;

//precarga de imagenes
const preloadImages = () => {
  for (let i = 0; i <= frameCount; i++) 
  {
      const img = new Image();
      img.src = "images/animations/" + i.toString().padStart(4,'0'); + ".png";
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

//event listener para el container de la animacion
document.getElementById("container").addEventListener( "scroll", scroll_function );
window.addEventListener( "scroll", scroll_function );

preloadImages()