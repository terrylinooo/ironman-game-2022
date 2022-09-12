/**
 * 範例 12-3
 */

const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const buttonHandler = {
    prev: function () {
        alert('我按了上一個按紐');
        
    },
    next: function () {
        alert('我按了下一個按紐');
    },
};

prevBtn.addEventListener('click', buttonHandler.prev);
nextBtn.addEventListener('click', buttonHandler.next);