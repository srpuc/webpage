$(".expo").click(function(){
    var img=$(this).attr("id");
    var nombre=$(this).attr("alt");
    $("#destacada").html("<img id=\"img_destacada\" src=\"../images/expo_items/"+img+"/"+img+".jpeg\" alt=\""+nombre+" ><\" />"+"<h1> "+nombre+"</h1>");
    //$("#destacada").html("<h1> "+nombre+"</h1>");
    //$("#destacada").html("<h1> <img id=\"img_destacada\" src=\"../images/expo_items/"+img+"/"+img+".jpeg\" ></img> "+nombre+"</h1>");
    $('html, body').animate({scrollTop: 0}, '300');
});