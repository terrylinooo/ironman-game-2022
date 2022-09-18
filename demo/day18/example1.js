/**
 * 範例 18-1
 */
(function () {

    let restart = false;

    $('#button-start-demo').on('click', function () {
        $('img.run').show();
        $('img.stop').hide();
        if (restart) {
            $('.item').css({'transition-duration': '10s'});
        }
        $('.item').css({width: '100%'});
        setTimeout(function () {
            $('img.run').hide();
            $('img.stop').show();
        }, 10500);
    });

    $('#button-reset-demo').on('click', function () {
        restart = true;
        $('img.run').hide();
        $('img.stop').show();
        $('.item').css({'transition-duration': '0s', width: '90px'});
    });
})(jQuery);