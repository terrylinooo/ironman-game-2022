/**
 * 範例 17-1
 */
 class Slider {
    constructor() {
        this.items = [];
        this.itemCount = 0;
        this.init();
        this.applyEvents();
    }

    init() {
        this.items = Array.from(document.querySelectorAll('.item'));
        this.itemCount = this.items.length;
        this.items.forEach((element, index) => {
            element.setAttribute('data-order', index + 1);
        });
    }

    goNextItem() {
        const self = this;
        this.items.forEach(function (element, index) {
            const originalPosition = index + 1;
            let order = Number(element.getAttribute('data-order'));
            if (order === 1) {
                order = self.itemCount;
            } else {
                order--;
            }
            const xAxis = (order - originalPosition) * 100;
            element.setAttribute('data-order', order);
            element.setAttribute('style', `transform: translateX(${xAxis}%)`);
        });
    }

    goPreviousItem() {
        const self = this;
        this.items.forEach(function (element, index) {
            const originalPosition = index + 1;
            let order = Number(element.getAttribute('data-order'));
            if (order === self.itemCount) {
                order = 1;
            } else {
                order++;
            }
            const xAxis = (order - originalPosition) * 100;
            element.setAttribute('data-order', order);
            element.setAttribute('style', `transform: translateX(${xAxis}%)`);
        });
    }

    applyEvents() {
        const prevBtn = document.querySelector('.previous');
        const nextBtn = document.querySelector('.next');
        prevBtn.addEventListener('click', this.goPreviousItem.bind(this));
        nextBtn.addEventListener('click', this.goNextItem.bind(this));
    }
}

new Slider();