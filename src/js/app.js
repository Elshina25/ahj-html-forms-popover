import Popover from "./Popover/Popover";

const button = document.querySelector('.button');
const popover = new Popover(button, 'Popover title', 'And here is some amazing content. It is very engaging. Right?');
popover.create();

document.addEventListener('click', (e) => {
  if (e.target === button) {
    popover.popover.classList.toggle('active');
  } else {
    popover.popover.classList.remove('active');
  }
  popover.setPosition();
});

window.addEventListener('resize', () => {
  popover.setPosition();
});
