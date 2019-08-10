document.addEventListener('DOMContentLoaded', () => {
  drawBackground();
  drawLamp();
});

function drawBackground() {
  let body = document.getElementsByTagName('BODY')[0];
  body.style = 'background-color: #BDCEE7; display: flex; justify-content: center;'
  let text = document.createElement('H1');
  text.innerHTML = 'PIXAR';
  text.style = 'font-size: 80px;'
  body.appendChild(text);
}