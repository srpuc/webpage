jQuery(document).ready(function() {
        
    var btn = $('#button');
    $('#button').hide();

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#button').show();
        }else {
            $('#button').hide();
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });

});