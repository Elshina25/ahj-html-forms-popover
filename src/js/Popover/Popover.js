export default class Popover {
    constructor(element, title, text) {
        this.element = element;
        this.title = title;
        this.text = text;
        this.popover = null;
    }

    createPopover() {
        this.popover = document.createElement('div');
        this.popover.classList.add('popover');
        this.popover.textContent = this.text;

        document.body.appendChild(this.popover);
        this.setPopoverPosition();
    }

    setPopoverPosition() {
        const elementRect = this.element.getBoundingClientRect();
        const popoverRect = this.popover.getBoundingClientRect();

        this.popover.style.top = `${elementRect.top - popoverRect.height - 10}px`;
        this.popover.style.left = `${elementRect.left - popoverRect.width / 2 + elementRect.width / 2}px`;
    }
}