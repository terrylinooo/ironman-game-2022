/**
 * 範例 12-4
 */

const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const prevBtnHandler = function (e) {
    console.log(e);
}

prevBtn.addEventListener('click', prevBtnHandler);
nextBtn.addEventListener('click', function (e) {
    console.log(e);
});
