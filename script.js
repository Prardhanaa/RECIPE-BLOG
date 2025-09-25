// Smooth scroll for internal links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // Back-to-top button
    $('body').append('<a href="#" class="back-to-top">↑</a>');
    var btn = $('.back-to-top');
    btn.css({
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#000',
        color: '#fff',
        padding: '10px 15px',
        'border-radius': '50%',
        'text-decoration': 'none',
        display: 'none',
        'font-size': '18px'
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '800');
    });
});
