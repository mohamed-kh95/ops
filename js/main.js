$(function () {
    // Header
    $('header').innerHeight($(window).innerHeight() - ($('.search-content').innerHeight() / 2));
    $('.search-content').css({
        top: ( '-' + $('.search-content').innerHeight() / 2) + 'px'
    });
    // Select
    $('.select .select-drop').on('click', function (e) {
        e.stopPropagation()
        if($(this).find('.drop').css('display') === 'none') {
            $('.select .drop').fadeOut()
            $(this).find('.drop').fadeIn(300)
        } else {
            $('.select .drop').fadeOut()
        }
    });
    $(window).on('click', function() {
        $('.select .drop').fadeOut()
    });
    // Scroll To Top
    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 800) {
        $(".to-top").fadeIn(500);
        } else {
        $(".to-top").fadeOut(500);
        }
    });
    $(".to-top").on("click", function() {
        $("html").animate(
        {
            scrollTop: 0
        },
        1500
        );
    });
    
});
$(window).on('resize', function () {
    $('header').innerHeight($(window).innerHeight() - ($('.search-content').innerHeight() / 2));
    $('.search-content').css({
        top: ( '-' + $('.search-content').innerHeight() / 2) + 'px'
    })
});