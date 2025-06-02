
document.querySelectorAll('.window').forEach(el => {
  let offsetX, offsetY, isDown = false;

  const header = el.querySelector('.title-bar');
  header.style.cursor = "move";

  header.addEventListener('mousedown', (e) => {
    isDown = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    el.style.zIndex = 1000;
  });

  document.addEventListener('mouseup', () => isDown = false);

  document.addEventListener('mousemove', (e) => {
    if (isDown) {
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    }
  });
});

// Update clock in taskbar
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const timeString = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();
