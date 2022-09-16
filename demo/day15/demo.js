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
        let attributeGroup = {};
        $('.example-value').each(function (i) {
            const attribute = $(this).closest('.example-item').attr('data-transform-attribute');
            const unit = $(this).closest('.example-item').attr('data-demo-unit');
            const value = $(this).text();
            if (typeof attributeGroup[attribute] === 'undefined') {
                attributeGroup[attribute] = [];
            }
            attributeGroup[attribute][i] = `${value}${unit}`;
            
        });
        Object.keys(attributeGroup).forEach((key) => {
            const attributeString = attributeGroup[key].map((item) => {
                return item;
            }).join(',');
            attributeList = {...{'transform': `${key}(${attributeString})`}};
          });
        return attributeList;
    };

    const initialSlideBars = function () {
        $('.example-bar').each(function () {
            const min = Number($(this).data('min'));
            const max = Number($(this).data('max'));
            const step = Number($(this).data('step'));
            const value = Number($(this).data('default'));
            $(this).slider({
                value: value,
                orientation: 'horizontal',
                range: 'min',
                min: min,
                max: max,
                step: step,
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