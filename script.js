class SCROLL {
    constructor(set) {
        if (typeof set.el == 'string') {
            this.el = document.querySelector(set.el);
        } else if (set.el instanceof HTMLElement) {
            this.el = set.el
        }
        this.top = set.top
        this.el.style.position = 'fixed'
        this.el.style.top = this.scroll()
        this.unit = set.unit

        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())

    }
    scroll() {
        this.window = this.scrollNumber()
        if (this.window - scrollY > 0) {
            this.el.style.top = this.window - scrollY + 'px'
        } else {
            this.el.style.top = 0
        }

    }
    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0
        } else if (this.unit == '%' || this.unit == undefined) {
            return window.innerHeight - this.el.clientHeight
        }
    }
}
const myScroll = new SCROLL({
    el: '.header__nav',
    top: 100,
    unit: '%'
})