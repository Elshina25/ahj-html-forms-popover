export default class Popover {
    constructor(element, title, text) {
        this.element = element;
        this.title = title;
        this.text = text;
        this.popover = null;
        this.header = null;
        this.content = null;
        this.arrow = null;
    }

    create() {
        this.popover = document.createElement('div');
        this.popover.classList.add('popover', 'popover-top');
        document.body.appendChild(this.popover);

        this.arrow = document.createElement('div');
        this.arrow.classList.add('arrow');
        this.popover.appendChild(this.arrow);

        this.header = document.createElement('h3');
        this.header.classList.add('popover-header');
        this.header.textContent = this.title;
        this.popover.appendChild(this.header);

        this.content = document.createElement('div');
        this.content.classList.add('popover-body');
        this.content.textContent = this.text;
        this.popover.appendChild(this.content);
    }

    setPosition() {
        const elementRect = this.element.getBoundingClientRect();
        const popoverRect = this.popover.getBoundingClientRect();
        const center = elementRect.left + (elementRect.width / 2);

        this.popover.style.top = `${elementRect.top - popoverRect.height - 10}px`;
        this.popover.style.left = `${center - (popoverRect.width / 2)}px`; 
    }
}