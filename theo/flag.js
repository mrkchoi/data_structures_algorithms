document.addEventListener('DOMContentLoaded', () => {
  let main = document.getElementsByClassName('main')[0];
  let stripes = document.createElement('UL');
  for (let i = 0; i < 13; i++) {
    let newS = document.createElement('LI');
    if (i % 2 === 0) {
      newS.style = 'background: red';
    }
    stripes.appendChild(newS);
  }
  main.appendChild(stripes);
  let box = document.getElementsByClassName('stars');
  for (let i = 0; i < 50; i++) {
    let star = document.createElement('LI');
    box.appendChild(star);
  }
  main.appendChild(starHolder);
});