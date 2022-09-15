/**
 * 範例 15
 * Author: Terry L.
 * URL: https://github.com/terrylinooo
 */
(function($) {
    'use strict';

    const exampleHandler = (event, ui) => {
        $(event.target).closest('.example-item').find('.example-value').text(ui.value);
        $('#transform-demo').css(getAttributeData());
    };

    const getAttributeData = () => {
        let attributeList = {};
        $('.example-value').each(function () {
            const attribute = $(this).closest('.example-item').attr('data-transform-attribute');
            const unit = $(this).closest('.example-item').attr('data-demo-unit');
            const value = $(this).text();
            attributeList = {...{'transform': `${attribute}(${value}${unit})`}};
        });
        return attributeList;
    };

    const initialSlideBars = function () {
        $('.example-bar').each(function () {
            $(this).slider({
                value: 0,
                orientation: 'horizontal',
                range: 'min',
                min: -100,
                max: 100,
                animate: true,
                change: exampleHandler,
            });
        });
    }

    $('#button-reset-demo').on('click', function () {
        initialSlideBars();
    });

    $(document).on('ready', function () {
        initialSlideBars();
    });

})(jQuery);