/**
 * 範例 13-2
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
        this.items.forEach(function (element) {
            let order = Number(element.getAttribute('data-order'));
            if (order === 1) {
                order = self.itemCount;
            } else {
                order--;
            }
            element.setAttribute('data-order', order);
            element.setAttribute('style', `order: ${order}`);
        });
    }

    goPreviousItem() {
        const self = this;
        this.items.forEach(function (element) {
            let order = Number(element.getAttribute('data-order'));
            if (order === self.itemCount) {
                order = 1;
            } else {
                order++;
            }
            element.setAttribute('data-order', order);
            element.setAttribute('style', `order: ${order}`);
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