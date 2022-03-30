$(".expo").click(function(){
    $("#destacada_img").html("");
    $("#destacada_texto").html("");
    var img=$(this).attr("id");
    var nombre=$(this).attr("alt");
    $('#ventana').hide();
    $('.row').css('opacity','0.3');

    

     $('#ventana').show( "slow" ,function(){
    //     $("#destacada_texto").html("<img id=\"img_destacada\" src=\"../images/expo_items/"+img+"/"+img+".jpeg\" alt=\""+nombre+" ><\" />"+"<h1>"+nombre+"</h1>");
        $("#destacada_img").html("<img id=\"img_destacada\" src=\"../images/expo_items/"+img+"/"+img+".jpeg\" alt=\""+nombre+"\">");
        $("#destacada_texto").html("<h1>"+nombre+"</h1>");
    });
});


$("#cruz").click(function(){
    $('#ventana').hide("slow");
    $('.row').css('opacity','1');
});