/**
 * 範例 12-2
 */

const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', function() {
    alert('我按了上一個按紐');
});

nextBtn.addEventListener('click', function() {
    alert('我按了下一個按紐');
});