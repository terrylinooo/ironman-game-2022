/**
 * 範例 12-6
 */

 const prevBtn = document.querySelector('.previous');
 const nextBtn = document.querySelector('.next');
 const prevBtnHandler = function (e) {
     alert('我按了' + e.target.innerText + '按紐');
 }
 
 prevBtn.addEventListener('click', prevBtnHandler);
 nextBtn.addEventListener('click', function (e) {
     alert('我按了' + e.target.innerText + '按紐');
 });
 
const clickEvent = new Event('click');
prevBtn.dispatchEvent(clickEvent);
 