
function formatClock(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = formatClock(now);
}
updateClock();
setInterval(updateClock, 1000);

document.querySelectorAll('.window').forEach(el => {
  let offsetX, offsetY, isDown = false;
  const header = el.querySelector('.title-bar');
  if (header) {
    header.style.cursor = "move";
    header.addEventListener('mousedown', (e) => {
      isDown = true;
      offsetX = e.clientX - el.offsetLeft;
      offsetY = e.clientY - el.offsetTop;
      el.style.zIndex = 1000;
    });
  }
  document.addEventListener('mouseup', () => isDown = false);
  document.addEventListener('mousemove', (e) => {
    if (isDown) {
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    }
  });
});

const startButton = document.querySelector('.start-button');
if (startButton) {
  startButton.addEventListener('click', () => {
    const menu = document.getElementById('start-menu');
    if (menu) {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }
  });
}
