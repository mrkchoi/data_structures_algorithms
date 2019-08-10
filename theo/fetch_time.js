document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName('BODY')[0];
  let yt = document.createElement('BUTTON');
  yt.innerHTML = 'https://www.face-network.herokuapp.com';
  let go = document.createElement('BUTTON');
  go.innerHTML = 'https://www.face-network.herokuapp.com';
  yt.onclick = helper;
  go.onclick = helper;
  body.appendChild(yt);
  body.appendChild(go);
})

function helper() {
  let event = arguments[0];
  console.log('the event is' + event)
  let btn = event.target;
  let site = btn.innerHTML;
  let clickTime = Date.now();
  makeReq(site).then(() => {
    let dv = document.createElement('DIV');
    dv.innerHTML = `${Date.now() - clickTime}`
    let body = document.getElementsByTagName('BODY')[0];
    body.appendChild(dv);
  })
}

function makeReq(site) {
  // return fetch(`${site}`, {
  //   method: 'GET'
  // })
  return Promise.resolve();
}