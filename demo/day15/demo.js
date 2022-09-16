/**
 * @package demo.js
 * @author Terry L.
 * @url https://github.com/terrylinooo
 */
(function($) {
    'use strict';

    const exampleHandler = (event, ui) => {
        $(event.target).closest('.example-item').find('.example-value').text(ui.value);
        $('#transform-demo').css({'transform': getAttributeString()});
    };

    const getAttributeString = () => {
        let attributeList = [];
        let attributeGroup = {};
        $('.example-value').each(function (i) {
            const attribute = $(this).closest('.example-item').attr('data-transform-attribute');
            const unit = $(this).closest('.example-item').attr('data-demo-unit');
            const value = $(this).text();
            if (typeof attributeGroup[attribute] === 'undefined') {
                attributeGroup[attribute] = [];
            }
            attributeGroup[attribute].push(`${value}${unit}`);
        });
        Object.keys(attributeGroup).forEach((key) => {
            const attributeString = attributeGroup[key].map((item) => {
                return item;
            }).join(',');
            attributeList.push(`${key}(${attributeString})`);
          });
        return attributeList.join(' ');
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

    const getSectionTemplate = (type, min, max, step, defaultValue, unit, position) => {
        return `
            <div class="example-item new-added-items-${position}" data-transform-attribute="${type}" data-demo-unit="${unit}">
                <div class="example-lable">${type}</div>
                <div class="example-bar" data-min="${min}" data-max="${max}" data-step="${step}" data-default="${defaultValue}"></div>
                <div class="example-value">${defaultValue}</div>
                <div class="example-unit">${unit}</div>
            </div>       
        `
    }

    $('#button-reset-demo').on('click', function () {
        initialSlideBars();
    });

    $(document).on('ready', function () {
        initialSlideBars();
    });

    $('.button-option-section').on('click', function () {
        const position = $(this).attr('data-position');
        const action = $(this).attr('data-action');
        const type = $(this).attr('data-type');
        const min = $(this).attr('data-min');
        const max = $(this).attr('data-max');
        const step = $(this).attr('data-step');
        const defaultValue = $(this).attr('data-default');
        const unit = $(this).data('unit');
        if (action === 'remove') {
            $(`.new-added-items-${position}`).remove();
            $(this).attr('data-action', 'add');
        } else if (action === 'add') {
            const html = getSectionTemplate(type, min, max, step, defaultValue, unit, position);
            if (position === 'before') {
                $('.transform-example').prepend(html);
                $('.new-added-items-after').remove();
            } else {
                $('.transform-example').append(html);
                $('.new-added-items-before').remove();
            }
            $(this).attr('data-action', 'remove');
        }
        initialSlideBars();
    });

})(jQuery);