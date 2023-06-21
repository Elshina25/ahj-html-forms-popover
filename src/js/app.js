import Popover from "./Popover/Popover";

const button = document.querySelector('.button');
const popover = new Popover(button, 'Popover title', 'And here is some amazing content. It is very engaging. Right?');

button.addEventListener('click', () => {
  popover.createPopover();
})
