// Navbar Active on Path
$('.nav-link').click(function() {
    jQuery(function($) {
        var path = window.location.href;
        $('ul a').each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});