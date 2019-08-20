// async function promise() {
//   let resA = await axios.get('api/users/2');
//   console.log(resA);
//   let resB = await axios.post('api/users/10', {resA});

// }

// const axios = require('axios');

let userDiv = document.querySelector(".user1");

// axios
fetch("https://randomuser.me/api?results=10")
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
    res.results.forEach(res => {
      parseUser(res);
    })
  })
  .catch(err => {
    console.log(err);
  });

function parseUser(res) {
  let firstName = res.name.first;
  let lastName = res.name.last;
  let fullName = `${firstName} ${lastName}`;
  let photoUrl = res.picture.large;

  let parentDiv = document.createElement('div');
  parentDiv.classList.add(`user-${firstName}-outer`);

  // set name
  let nameEl = document.createElement('p');
  nameEl.classList.add(`user-${firstName}-name`);
  nameEl.textContent = fullName;

  // set photo
  let photo = document.createElement("img");
  photo.setAttribute("src", photoUrl);
  photo.setAttribute("alt", 'profile photo');
  photo.classList.add(`user-${firstName}-photo`);

  parentDiv.appendChild(nameEl);
  parentDiv.appendChild(photo);

  let usersOuterDiv = document.querySelector(".users");
  usersOuterDiv.appendChild(parentDiv);
}
