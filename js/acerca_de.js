
// FUNCION: APACERCER HOVER
// ------------------------

function hover_in_subsection( id )  {

    const subsection = document.getElementById( id );

    subsection.getElementsByTagName("img")[0].style.opacity = 1;
    subsection.getElementsByTagName("img")[0].style.transition = "all 1s"

}

function hover_out_subsection( id ) {
    
    const subsection = document.getElementById( id );

    subsection.getElementsByTagName("img")[0].style.opacity = 0;
    subsection.getElementsByTagName("img")[0].style.transition = "all 1s"

}

// AÑADIR EVENTOS
// --------------

document.getElementById("sec1").addEventListener( "mouseover", function(){ hover_in_subsection( "sec1" ); } );
document.getElementById("sec1").addEventListener( "mouseout", function(){ hover_out_subsection( "sec1" ); } );

document.getElementById("sec2").addEventListener( "mouseover", function(){ hover_in_subsection( "sec2" ); } );
document.getElementById("sec2").addEventListener( "mouseout", function(){ hover_out_subsection( "sec2" ); } );

document.getElementById("sec3").addEventListener( "mouseover", function(){ hover_in_subsection( "sec3" ); } );
document.getElementById("sec3").addEventListener( "mouseout", function(){ hover_out_subsection( "sec3" ); } );