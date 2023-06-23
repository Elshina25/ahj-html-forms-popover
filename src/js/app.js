import Popover from "./Popover/Popover";

const button = document.querySelector('.button');
const popover = new Popover(button, 'Popover title', 'And here is some amazing content. It is very engaging. Right?');
popover.create();

button.addEventListener('click', () => {
  popover.popover.classList.toggle('active');
  popover.setPosition();
});

window.addEventListener('resize', () => {
  popover.setPosition()
});
