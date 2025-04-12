// Move kids left to right
const kids = document.querySelector('.kids');
let pos = 0;
let direction = 0.1;

function moveKids() {
  pos += direction;
  if (pos > 100 || pos < 0) direction *= -1;
  kids.style.left = `${pos}%`;
  requestAnimationFrame(moveKids);
}

moveKids();
