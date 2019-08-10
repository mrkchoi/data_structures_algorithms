document.addEventListener('DOMContentLoaded', () => {
  drawCalc();
  let equation;
  let type;
  let buttons = document.getElementsByTagName('button');
  let input = document.getElementsByTagName('input')[0];
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.onclick = (function() {
      equation = parseInt(input.value);
      type = button.value;
    })
  }
  let submit = document.getElementById('submit');
  submit.onclick = (function() {
    let number = document.getElementById('number')
    if (type === '+') {
      number.innerHTML = parseInt(input.value) + equation;
    }
  })
})

function drawCalc() {
  let num = document.createElement('h1');  
  num.innerHTML = '0';
  num.id = 'number';
  let body = document.getElementsByTagName('body')[0];
  body.appendChild(num);

  let inp = document.createElement('input');
  body.appendChild(inp);

  let pls = document.createElement('button');
  pls.innerHTML = '+';
  pls.value = '+';

  let mns = document.createElement('button');
  mns.innerHTML = '-';
  mns.value = '-';

  let tms = document.createElement('button');
  tms.innerHTML = '*';
  tms.value = '*';

  let divi = document.createElement('button');
  divi.innerHTML = '/';
  divi.value = '/';

  body.appendChild(pls);
  body.appendChild(mns);
  body.appendChild(tms);
  body.appendChild(divi);

  let sbm = document.createElement('button');
  sbm.innerHTML = 'submit';
  sbm.id = 'submit'
  body.appendChild(sbm);

}