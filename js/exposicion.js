var color=[];
var autor=[];

$(document).ready(function(){
    $.ajax({
        url:'../xml/tazas.xml',
        dataType:'xml',
        success: function(data){
            $(data).find('TAZAS taza').each(function(){
                var col=$(this).find('color').text();
                var aut=$(this).find('autor').text();
                color.push(col);
                autor.push(aut);
            });
        },
        error: function(){
            console.log();
        }
    });
});

$(".expo").click(function(){
    $("#destacada_texto").html("");
    $("#destacada_img").html("");
    var img=$(this).attr("id");
    var nombre=$(this).attr("alt");
    $('#ventana').hide();
    $('.row').css('opacity','0.3');

     $('#ventana').show( "slow" ,function(){
        $("#destacada_img").html("<img id=\"img_destacada\" src=\"../images/expo_items/"+img+"/"+img+".jpeg\" alt=\""+nombre+"\">");
        $("#destacada_texto").html("<h1>"+nombre+"</h1>"+"<p>Autor: "+autor[img.split('_')[1]]+".</p>"+"<p>Color: "+color[img.split('_')[1]]+".</p>");
    });
});


$("#cruz").click(function(){
    $('#ventana').hide("slow");
    $('.row').css('opacity','1');
});