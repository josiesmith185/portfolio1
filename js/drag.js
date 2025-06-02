
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
